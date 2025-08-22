"use client";
import React, { useEffect, useState } from 'react';
import NavBarForComputer from '../sub/navBarForComputer';
import NavBarForPhone from '../sub/navBarForPhone';
import { NavBarParams } from '@/types';

const NavBar = ({
  aiSecExist, 
  setAiSecExist
}: NavBarParams) => {

  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (width === null) return null;

  return (
    <div className='w-full h-[60px] sm:h-[65px] fixed top-0 shadow-lg shadow-[#2a0e61]/50 bg-[#03001417] backdrop-blur-md z-[70] px-10'>
      {width > 1000 ? 
        <NavBarForComputer 
          aiSecExist={aiSecExist} 
          setAiSecExist={setAiSecExist}
        /> : 
      <NavBarForPhone 
          aiSecExist={aiSecExist} 
          setAiSecExist={setAiSecExist}
      />}
    </div>
  );
};

export default NavBar;
