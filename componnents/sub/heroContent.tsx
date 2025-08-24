'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const HeroContent = () => {

  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (width === null) return null;
  
  return (
    <motion.div
        initial="hidden"
        animate="visible"
        className='overflow-hidden flex flex-row items-center justify-center px-10 sm:px-20 mt-40 w-full z-20'
    >
      <div className='w-full h-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
            variants={slideInFromTop}
            className='w-fit flex flew-row welcome-box py-[8px] px-[7px] rounded-full border border-[#7042f88b] opacity-[0.9]'
        >
            <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5 '/>
            <h1 className='welcome-text text-[13px] text-white'>FULL STACK DEVELOPER</h1>

        </motion.div>

        <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col text-2xl mt-2 max-w-[600px] w-auto h-auto sm:text-white text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'
        >
            Hi i'm Fares,
        </motion.div>
        
        <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-1 sm:gap-6 mt-0 text-[50px] sm:text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
        >
            <span>
                Providing 
                <span className='text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-cyan-500'> the best </span>
                project experience
            </span>
        </motion.div>
        
        <motion.p
            variants={slideInFromLeft(0.8)}
            className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
            I'm a full stack web & mobile developer expert in MERN stack technology and react native for mobile aplications,
            Check out my projects and skills,
        </motion.p>

        <motion.a
            href='#about-me'
            variants={slideInFromLeft(1)}
            className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
        >
            learn more
        </motion.a>
        
      </div>

      
        {width > 1000 && <motion.div
            variants={slideInFromRight(0.8)}
            className='w-full h-full flex justify-center items-center text-white'
        >
            <img
                src='/mainIconsdark.svg'
                alt='work icons'
                height={650}
                width={650}
            />
        </motion.div>}

    </motion.div>
  )
}

export default HeroContent
