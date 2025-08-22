import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[980]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                        <a 
                            href="#about-me"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <img 
                                src="/facebook.svg" 
                                alt="linkedIn" 
                                className="w-[16px] h-[16px]"
                            />
                            <span className="text-[15px] ml-[6px]">Facebook</span>    
                        </a>
                        <a 
                            href="#about-me"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <img 
                                src="/gitwhite.png" 
                                alt="linkedIn" 
                                className="w-[16px] h-[16px]"
                            />
                            <span className="text-[15px] ml-[6px]">GitHub</span>    
                        </a>
                        <a 
                            href="#about-me"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <img 
                                src="/linkedIn.png" 
                                alt="linkedIn" 
                                className="w-[16px] h-[16px]"
                            />
                            <span className="text-[15px] ml-[6px]">LinkedIn</span>    
                        </a>
                    </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>

                        <a 
                            href="#about-me"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <img 
                                src="/facebook.svg" 
                                alt="linkedIn" 
                                className="w-[16px] h-[16px]"
                            />
                            <span className="text-[15px] ml-[6px]">Facebook</span>    
                        </a>
                        <a 
                            href="#about-me"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <img 
                                src="/gitwhite.png" 
                                alt="linkedIn" 
                                className="w-[16px] h-[16px]"
                            />
                            <span className="text-[15px] ml-[6px]">GitHub</span>    
                        </a>
                        <a 
                            href="#about-me"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <img 
                                src="/linkedIn.png" 
                                alt="linkedIn" 
                                className="w-[16px] h-[16px]"
                            />
                            <span className="text-[15px] ml-[6px]">LinkedIn</span>    
                        </a>

                    </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                    <a 
                        href="#about-me"
                        className="flex flex-row items-center my-[15px] cursor-pointer"
                    >
                  
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </a>
                    <a 
                        href="tel:+21629165922"
                        className="flex flex-row items-center my-[15px] cursor-pointer"
                    >
                  
                        <span className="text-[15px] ml-[6px]">+216 29 165 922</span>    
                    </a>
                    <a 
                        href="mailto:fereshouidi298@gmail.com"
                        className="flex flex-row items-center my-[15px] cursor-pointer"
                    >
                  
                        <span className="text-[15px] ml-[6px]">fereshouidi298@gmail.com</span>    
                    </a>
                    

                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Fares Houidi 2025 . All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer