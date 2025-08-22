'use client';
import { getAgeFromDateString, personalInformation } from '@/constents';
import { slideInFromLeft, slideInFromTop } from '@/utils/motion';
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const AboutMe = () => {

  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!width) return
  
  return (

    <div  id='about-me' className='flex flex-col items-center justify-center'>

      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
        About Me  
      </h1>

      <div className={`h-auto w-full overflow-hidden flex justify-center items-center p-7 rounded-4xl gap-10 ${width > 1100 ? 'flex-row' : 'flex-col'} `}>
        
        <motion.div 
          variants={slideInFromTop}
          className={`${width > 500 ? 'w-[300px] h-[300px]' : 'w-[200px] h-[200px] '} rounded-full overflow-hidden relative p-5 `}
        >
          <video
            loop
            muted
            autoPlay
            playsInline
            preload="false"
            className="w-full h-full absolute top-0 left-0 bg-red object-cover rounded-full animate-spin"
            src="/encryption.webm"
          />
          <img 
              src="/fares.jpg" 
              alt="fares" 
              className={`w-full h-full opacity-90 rounded-full`}
          />
        </motion.div>

        <motion.div 
          variants={slideInFromLeft(0.5)}
          className='text-white min-w-[400px] min-h-[400px] max-w-[100vw] flex flex-col w-[60%] p-10 gap-2 rounded-4xl  z-40'
        >
          <p><strong>👤 Full Name : </strong> {personalInformation.fullName}</p>
          <p><strong>🎂 Age : </strong> {getAgeFromDateString(personalInformation.dateOfBirth) + ' years old'}</p>
          <p><strong>📍 Location : </strong> {personalInformation.location}</p>
          <p><strong>🌐 Languages : </strong></p>
          <ul className="ml-4 list-disc">
            {personalInformation.language.map((lang, index) => (
              <li key={index} className='ml-10'>{lang.language} — {lang.level}</li>
            ))}
          </ul>
          <p className='mt-0 text-gray-300'><strong>Bio : </strong>{personalInformation.bio}</p>
        </motion.div>

        </div>
      </div>

  )
}

export default AboutMe
