'use client';
import SpaceSection from '@/cssTricks/spaceSection/spaceSection'
import React, { FormEvent, TextareaHTMLAttributes, useContext, useEffect, useRef, useState } from 'react'
import LoadingForSendBTN from '@/cssTricks/loadingForSendBTN/loadingForSendBTN';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { socket } from '@/constents';
import { ClientParams, ConversationParams } from '@/types';
import { StatusBannerContext } from '@/contexts';

interface MessageComposerParams {
    visibility: boolean
    className?: string
    answer?: string, 
    setAnswer: (value: string) => void
    textDirection?: 'ltr' | 'rtl', 
    isTherAnswer: boolean,
    setIsTherAnswer: (value: boolean) => void
}

const MessageComposer = ({
    visibility,
    className,
    answer, 
    setAnswer,
    textDirection, 
    isTherAnswer, 
    setIsTherAnswer
}: MessageComposerParams) => {

    const setBanner = useContext(StatusBannerContext)?.setStatusBanner;
    const [isWaitingForAnswer, setIsWaitingForAnswer] = useState<boolean>(false);
    const [conversation, setConversation] = useState<ConversationParams | undefined>(undefined);
    const [client, setClient] = useState<ClientParams | undefined>(undefined);
    const [messageText, setMessageText] = useState<string | null>(null);
    // const [answerText, setAnswerText] = useState<string | null>(null);
    const [isUserWait, setIsUserWait] = useState<boolean>(false);


    const textareaRef = useRef<HTMLTextAreaElement >(null);
    
    const handleInput = (e: FormEvent<HTMLTextAreaElement>) => {
        setMessageText(e.currentTarget.value);
        const el = textareaRef.current;
        if (!el) return;
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
    };

    // useEffect(() => {
    //     console.log(messageText);
        
    // }, [messageText])

    useEffect(() => {
    const clientToken = localStorage.getItem("clientToken");

    socket.emit("get-client", {
        conversationId: conversation?._id,
        token: clientToken,
    });

    const handleAddClient = (data: any) => {
        if (!data.newClient) return;
        localStorage.setItem("clientToken", data.newClient.token);
        setClient(data.newClient);
        console.log("New client added:", data.newClient);
        
    };

    const handleGetClientResponse = (data: any) => {
        setClient(data.client);
    };

    socket.on("add-client", handleAddClient);
    socket.on("get-client-response", handleGetClientResponse);

    return () => {
        socket.off("add-client", handleAddClient);
        socket.off("get-client-response", handleGetClientResponse);
    };
    }, [conversation?._id]);

    useEffect(() => {
    const conversationId = localStorage.getItem("conversationId");

    socket.emit("get-conversations", {
        _id: conversationId,
        clientId: client?._id,
        limit: 1,
        skip: 0,
    });

    const handleGetConversationsResponse = (data: any) => {
        if (!data.conversations || data.conversations.length < 1) return;
        setConversation(data.conversations[0]);
        console.log("Conversations received:", data.conversations);
        
    };

    const handleAddConversation = (data: any) => {
        if (!data.newConversation) return;
        localStorage.setItem("conversationId", data.newConversation._id);
        setConversation(data.newConversation);
        console.log("New conversation added:", data.newConversation);
        
    };

    socket.on("get-conversations-response", handleGetConversationsResponse);
    socket.on("add-conversation", handleAddConversation);

    return () => {
        socket.off("get-conversations-response", handleGetConversationsResponse);
        socket.off("add-conversation", handleAddConversation);
    };
    }, [client?._id]);



    useEffect(() => {
        console.log({conversation, client});
        
    }, [conversation, client])

    useEffect(() => {
        const handler = (data: any) => {
            try {
                console.log({ data });

                if (data?.answer) {
                    const AiResponse = data.answer ;
                    const messageStart = AiResponse.indexOf('<messageToClient>') + '<messageToClient>'.length;
                    const messageEnd = AiResponse.indexOf('</messageToClient>');
                    const message = AiResponse.slice(messageStart, messageEnd).trim();

                    console.log({message});
                    
                    setAnswer(message);
                    setIsTherAnswer(true);
                    setIsWaitingForAnswer(false);
                    moveToSection(AiResponse);

                    return;
                }

                if (data?.messageToWait) {
                    setIsUserWait(true);
                    setAnswer(`loading...`);
                    setIsTherAnswer(true);
                    return;
                }

                if (data?.error) {
                    setBanner?.(true, data.error, "exclamation");
                }

                setIsWaitingForAnswer(false);
                setIsUserWait(false);
            } catch (err) {
                console.log({ catchError: err });
            }
        };

        socket.on("receive-message", handler);

        
        return  () => {
            !isUserWait ? socket.off("receive-message", handler) : null;
        };
    }, [setAnswer, setIsTherAnswer, setBanner]);


    const sendMessage = async () => {
        if (
            !client?._id || 
            !messageText || 
            isWaitingForAnswer
        ) return console.log({client, messageText, isWaitingForAnswer});

        setIsWaitingForAnswer(true);

        socket.emit("send-message", { 
            conversationId: conversation?._id, 
            clientId: client._id, 
            message: messageText, 
            isWaiting: false,
            model: "gemini-2.5-flash"
        });

        // setMessageText("");
    };

    const moveToSection = (response: string) => {
        if (response.includes("<projects/>")) {
            window.location.href = "#projects";
        } else if (response.includes("<hero/>")) {
            window.location.href = "#hero";
        } else if (response.includes("<contactMe/>")) {
            window.location.href = "#contact";
        } else if (response.includes("<aboutMe/>")) {
            window.location.href = "#about-me";
        } else if (response.includes("<skills/>")) {
            window.location.href = "#skills";
        }
    }


  return (
    <div className={`${visibility ? "" : "invisible"} w-fit sm:w-[500px] fixed bottom-0 right-0  p-2 m-2 z-[999] rounded-3xl overflow-hidden bg-transparent backdrop:blur-2xl ${className}`} >

      <p className='mx-2 text-white mb-2'>you can ask FaresAi about anything or to do anything .</p>

      <div className='w-full flex flex-1 flex-row justify-center items-end'>

        <textarea 
            className={`w-full max-h-48 min-h-12 outline-0 rounded-2xl px-3 py-1 flex flex-1 text-white bg-white/20 overflow-scroll scrollbar-hide`}
            placeholder='message...'
            ref={textareaRef}
            onInput={(e) => handleInput(e)}
        ></textarea>

        <button 
            className='bg-gradient-to-t from-purple-500 to-cyan-500 hover:from-cyan-500 hover:to-purple-500 opacity-80 hover:opacity-100
                w-14 h-14 rounded-full text-white flex justify-center items-center ml-2 mb-1 cursor-pointer relative
                transition-colors duration-2000'
            onClick={sendMessage}
        >
            {
                isWaitingForAnswer ? 
                    <LoadingForSendBTN/> :
                    <FontAwesomeIcon icon={faPaperPlane} className='icon'/>
            }
        </button>

      </div>

      <SpaceSection/>
    </div>
  )
}

export default MessageComposer
