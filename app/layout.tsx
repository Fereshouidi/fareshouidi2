'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StarBackground from "@/componnents/main/starBackground";
import NavBar from "@/componnents/main/navBar";
import NavOptions from "@/componnents/sub/navOptions";
import { useState } from "react";
import { NavOptionsContext } from "@/contexts/index.ts";
import MusicBanner from "@/componnents/sub/musicBanner";
import { StatusBannerContext } from "@/contexts/index.ts";
import { StatusBannerParams } from "@/types";
import StatusBanner from "@/componnents/sub/statusBanner";
import MessageComposer from "@/componnents/sub/messageComposer";
import AnswerSec from "@/componnents/sub/answerSec";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "fares houidi",
//   description: "this is my portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [navOptionsExist, setNavOptionsExist] = useState<boolean>(false);
  const [musicBannerVisible, setMusicBannerVisible] = useState<boolean>(true);
  const [statusBanner, setStatusBanner] = useState<StatusBannerParams>({
    visibility: false,
    title: '',
    status: undefined
  });
  const [aiSecExist, setAiSecExist] = useState<boolean>(false);
  const [isTherAnswer, setIsTherAnswer] = useState<boolean>(false);
  const [textDirection, setTextDirection] = useState<'rtl' | 'ltr'>('ltr');
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);

  const handleStatusBanner = (visibility: boolean, title?: string, status?: 'success' | 'fail' | 'exclamation') => {
    setStatusBanner({visibility, title, status});
  }

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/fares.jpg" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full h-full bg-red-500  antialiased overflow-y-scroll overflow-x-hidden relative`}
        style={{backgroundColor: '#030014'}}
      >
        <StatusBannerContext.Provider value={{statusBanner, setStatusBanner: handleStatusBanner}}>
          
          <NavOptionsContext.Provider value={{
            isOpen: navOptionsExist, 
            setIsOpen: setNavOptionsExist
          }}>
            {musicBannerVisible && <MusicBanner
              visible={musicBannerVisible}
              setVisible={setMusicBannerVisible}
            />}

            {/* <div className="w-wh h-vh absolute top-0 left-0 z-50"> */}
              <StarBackground/>
            {/* </div> */}

            <NavBar
              aiSecExist={aiSecExist}
              setAiSecExist={setAiSecExist}
            />
            {children}

            <MessageComposer
              visibility={aiSecExist}
              setAnswer={setAiAnswer}
              textDirection={textDirection}
              isTherAnswer={isTherAnswer}
              setIsTherAnswer={setIsTherAnswer}
            />

            <AnswerSec
              answer={aiAnswer}
              textDirection={textDirection}
              isTherAnswer={isTherAnswer}
              setIsTherAnswer={setIsTherAnswer}
            />
            
            <NavOptions
              isOpen={navOptionsExist}
              setIsOpen={setNavOptionsExist}
              aiSecExist={aiSecExist}
              setAiSecExist={setAiSecExist}
            />
            {statusBanner.visibility && <StatusBanner/>}

          </NavOptionsContext.Provider>

        </StatusBannerContext.Provider>
      </body>
    </html>
  );
}
