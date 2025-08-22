'use client';
import React from 'react'

interface Props {
    isOpen: boolean
}
const NavIcon = ({
    isOpen
}: Props) => {

  return (
    <div className='w-full h-full flex flex-col items-center justify-center relative rounded-lg'>
      <div 
        className={
            `bg-white w-full h-[5px] rounded-lg absolute top-0 duration-200
            ${isOpen ? ' rotate-45 translate-y-[13px]' : ''} `
        }></div>
      <div 
        className={
            `bg-white w-full h-[5px] rounded-lg
            ${isOpen ? 'invisible' : ''} 
            ${!isOpen && 'duration-200'}`
        }></div>
      <div 
        className={
            `bg-white w-full h-[5px] rounded-lg absolute bottom-0 duration-200
            ${isOpen ? ' -rotate-45 -translate-y-[13px]' : ''} `
        }></div>
    </div>
  )
}

export default NavIcon
