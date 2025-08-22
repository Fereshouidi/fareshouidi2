'use client';
import { Socials } from '@/constents'
import React, { useContext, useState } from 'react'
import NavIcon from './navIcon'
import { NavOptionsContext } from '@/contexts'
import { NavBarParams } from '@/types';

const NavBarForPhone = ({
  aiSecExist, 
  setAiSecExist
}: NavBarParams) => {

    // const [navOptionsExist, setNavOptionsExist] = useState<boolean>(false);
    const navOptions = useContext(NavOptionsContext);
    
    if (!navOptions) return;
  return (
      <div className='w-full h-full flex flex-row items-center justify-between z-50 '>
        <a 
            href="#hero"
            className='w-auto h-auto flex flex-row items-center'
        >
            <img
                src="/fares.jpg"
                alt="logo"
                // width={70}
                // height={70}
                className='w-11 h-11 cursor-pointer hover:animate-spin rounded-full'
            />

            <span className='font-bold ml-[10px] text-transparent bg-clip-text bg-gradient-to-b from-purple-800 to-cyan-800 '>
                Fares Houidi
            </span>
        </a>

        <div 
            className={`w-[30px] h-[30px] ${!navOptions?.isOpen && 'py-1'}`}
            onClick={() => navOptions?.setIsOpen(!navOptions.isOpen)}
        >
            <NavIcon
                isOpen={navOptions?.isOpen}
            />
        </div>
        
      </div>
  )
}

export default NavBarForPhone
