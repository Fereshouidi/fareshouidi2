'use client';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';
// import speakerIMG from '/faresAi.png';
import '@/cssTricks/answerSec.css';
import SpaceSection from '@/cssTricks/spaceSection/spaceSection';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

type AnswerSecProps = {
  answer: string | null, 
  textDirection: 'rtl' | 'ltr',
  isTherAnswer: boolean,
  setIsTherAnswer: (value: boolean) => void
}
const AnswerSec = ({answer, textDirection, isTherAnswer, setIsTherAnswer}: AnswerSecProps) => {

    const dragRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight > 1000 ? window.innerHeight / 2 : window.innerHeight / 2.2;
      setPosition({ x: centerX, y: centerY });
    }, []);

    const handleMouseDown = (e: MouseEvent | React.MouseEvent) => {
      const startX = e.clientX - position.x;
      const startY = e.clientY - position.y;
  
      const handleMouseMove = (e: MouseEvent) => {
        setPosition({
          x: e.clientX - startX,
          y: e.clientY - startY,
        });
      };
  
      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
  
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };
    

    const styleImage: CSSProperties = {
        direction: textDirection
    }
    const styleagentText: CSSProperties = {
        textAlign: textDirection == 'rtl' ? 'right' : 'left'
    }
    const style: CSSProperties = {
        left: `${ position.x }px`, 
        top: `${ position.y }px`,
        transform: 'translate(-50%, -50%)'
    }
      

  return (

    <div id='answer-sec'
        ref={dragRef}
        style={style}
        className={`${isTherAnswer? '' : 'invisibles'} rounded-3xl overflow-hidden max-h-[70vh] sm:max-h-[90vh] z-[888]`}
    >
        <div className='header draged-header text-white' onMouseDown={handleMouseDown}>
            <div id='speaker' style={styleImage}>
                <img src='/fares.jpg' />
                <h5>fares ai</h5>
            </div>
            <img 
              src="/close.png" 
              alt="" 
              className='rounded-full p-3 cursor-pointer bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:scale-125 duration-100 z-50'
              onClick={(e) => { e.stopPropagation(); setIsTherAnswer(false)}}
            />
        </div>

        <div id='answer' className='text-white  overflow-y-scroll scrollbar-hide' style={styleagentText} dangerouslySetInnerHTML={{__html: answer?? '<div>text not valid !</div>'}}>
          
        </div>

        <SpaceSection/>

    </div>
  );
};

export default AnswerSec;
