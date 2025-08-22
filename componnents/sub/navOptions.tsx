'use client';
import { Socials } from '@/constents';
import React, { useEffect, useState } from 'react'

interface Props {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
    aiSecExist: boolean 
    setAiSecExist: (value: boolean) => void
}
const NavOptions = ({
    isOpen,
    setIsOpen,
    aiSecExist, 
    setAiSecExist
}: Props) => {

  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!width) return

  return (    
    <div className={
                `${width < 1000 && "none"}
                w-full h-[calc(100vh-55px)] fixed 
                ${isOpen ? "top-0" : "top-[100%]"}  
                flex flex-col justify-center items-center gap-2 p-5 backdrop-blur-sm bg-transparent
                inset-0 z-[998] mt-[55px] duration-200 
            `}>
        <div 
            className={
                `w-full
                flex flex-col justify-center items-center gap-2
            `}>
            
                <div className='flex flex-row items-center justify-center min-w-[150px] h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    <a href="#about-me" className='w-full h-full text-center cursor-pointer hover:text-[#7042f8]' onClick={() => setIsOpen(false)}>About Me</a>
                </div>

                <div className='flex flex-row items-center justify-center min-w-[150px] h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    <a href="#skills" className='w-full h-full text-center cursor-pointer hover:text-[#7042f8]' onClick={() => setIsOpen(false)}>Skills</a>
                </div>

                <div className='flex flex-row items-center justify-center min-w-[150px] h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    <a href="#projects" className='w-full h-full text-center cursor-pointer hover:text-[#7042f8]' onClick={() => setIsOpen(false)}>Projects</a>
                </div>

                <div className='flex flex-row items-center justify-center min-w-[150px] h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    <a href="#contact" className='w-full h-full text-center cursor-pointer hover:text-[#7042f8]' onClick={() => setIsOpen(false)}>Contact</a>
                </div>

                <div className='flex flex-row items-center justify-center min-w-[150px] h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    <span className={`w-full h-full text-center cursor-pointer hover:text-[#7042f8] ${aiSecExist && 'text-[#7042f8]'}`} onClick={() => {
                        setAiSecExist(!aiSecExist)
                        setIsOpen(false)
                    }}>Ask Ai</span>
                </div>

        </div>

        <div className='flex flex-row gap-5 mt-5'>
            {Socials.map((social) => (
                <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                >
                    <img 
                        src={social.src} 
                        alt={social.name}
                        width={24}
                        height={24}
                    />
                </a>

            ))}
        </div>

    </div>

  )
}

export default NavOptions
