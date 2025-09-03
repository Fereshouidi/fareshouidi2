'use client'
import React, { useContext } from 'react'
import { StatusBannerContext } from '@/contexts'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const StatusBanner = () => {

    const statusBannerContext = useContext(StatusBannerContext);

    if (!statusBannerContext) {
        return;
    }

    const {statusBanner, setStatusBanner} = statusBannerContext;

  return (
    <div 
        className={`flex fixed top-0 left-0 w-full h-[100vh] backdrop-blur-sm z-[999] justify-center`}
        onClick={() => setStatusBanner(false)}
    >
        <div 
            className=' fixed top-[50%] translate-y-[-50%] rounded-2xl backdrop-blur-[500px] p-5 max-w-[300px]'
            style={{
                borderWidth: '1px',
                borderRadius: '10px',
                borderStyle: 'solid',
                borderImage: 'linear-gradient(to right, purple, cyan) 1',
            }}
        >
            {
                statusBanner.status == 'success' ? 
                    <DotLottieReact
                        src="Success.json"
                        autoplay
                    />
                : statusBanner.status == 'exclamation' ?

                    <DotLottieReact
                        src="AlertIconExclamation.json"
                        autoplay
                    />

                :
                    <DotLottieReact
                        src="fail.json"
                        autoplay
                    />
            }

            <p className='text-white text-center'>{statusBanner.title}</p>
        
      </div>
    </div>
  )
}

export default StatusBanner;