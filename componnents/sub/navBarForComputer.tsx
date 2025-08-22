import { Socials } from '@/constents'
import { NavBarParams } from '@/types'
import React from 'react'

const NavBarForComputer = ({
  aiSecExist, 
  setAiSecExist
}: NavBarParams) => {
    
  return (
    
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a 
            href="#hero"
            className='w-auto h-auto flex flex-row items-center'
        >
            <img
                src="/fares.jpg"
                alt="logo"
                // width={40}
                // height={40}
                className='w-11 h-11 cursor-pointer hover:animate-spin rounded-full'
            />

            <span className='font-bold ml-[10px] hidden md:block text-gray-100 '>
                FARES HOUIDI
            </span>
        </a>

        <div className='w-[500px] h-full flex flex-row justify-between items-center md:mr-20'>
            <div className='flex flex-row items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                <a href="#about-me" className='cursor-pointer hover:text-[#7042f8]'>About Me</a>
                <a href="#skills" className='cursor-pointer hover:text-[#7042f8]'>Skills</a>
                <a href="#projects" className='cursor-pointer hover:text-[#7042f8]'>Projects</a>
                <a href="#contact" className='cursor-pointer hover:text-[#7042f8]'>Contact</a>
                <span className={`cursor-pointer hover:text-[#7042f8] ${aiSecExist && 'text-[#7042f8]'}`} onClick={() => {setAiSecExist(!aiSecExist)}}>Ask Ai</span>
            </div>
        </div>

        <div className='flex flex-row gap-5'>
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

export default NavBarForComputer
