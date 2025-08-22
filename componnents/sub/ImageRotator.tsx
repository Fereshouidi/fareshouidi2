import { ImageRotatorParams } from '@/types'
import React, { Ref, RefObject, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageRotator = ({
    images,
    imageSelected,
    setImageSelected
}: ImageRotatorParams) => {

    const [width, setWidth] = useState<number>(NaN);
    const slidesRef = useRef<HTMLDivElement>(null);

    const [slideLong, setSlideLong] = useState<number>(images.length * 1000);
    const [currentSlide, setCurrentSlide] = useState<number>(NaN);

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        // if (!currentSlide) {
            setCurrentSlide(images.indexOf(imageSelected))
            // alert('pingo')
        // }
    }, [images, imageSelected])

    useEffect(() => {

        if (!slidesRef.current) return;

        slidesRef.current.style.transform = `translateX(-${currentSlide * 1000}px)`

    }, [currentSlide])

    if (!width) return;

    if (width < 1250) {
        return (
            <div 
                className='w-full h-full fixed top-0 left-0 backdrop-blur-3xl bg-black/20 flex flex-col justify-between items-center z-[9999]'
                style={{
                    backdropFilter: 'blur(70px)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
            
            <div className='w-full flex justify-end'>
                <img 
                    src="/close.png" 
                    alt="" 
                    className='w-[40px] h-[40px] mt-2 mr-5 rounded-full p-3 cursor-pointer bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:scale-125 duration-100 z-50'
                    onClick={(e) => {
                        e.stopPropagation()
                        setImageSelected(null)
                    }}
                />
            </div>

                <div 
                    className=' w-full h-[90%] rounded-2xl flex flex-1 flex-row mb-2'
                    // style={{
                    //     height: `calc(100% - 70px)`
                    // }}
                >
                    <Swiper
                        // spaceBetween={0}
                        slidesPerView={1}
                        direction='horizontal'
                        initialSlide={images.indexOf(imageSelected)}
                        // loop={true}
                        // autoplay={{ delay: 3000 }}
                        className='w-full'
                    >
                        {
                            images.map((image, index) => (
                                <SwiperSlide
                                    key={index}
                                    className=''
                                >
                                    <div className='w-full h-full flex justify-center items-center'>
                                        <img 
                                            src={image} 
                                            alt="image" 
                                            className='max-w-full max-h-full rounded-2xl object-contain'
                                        />
                                    </div>

                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

            </div>

        )

    } else {
        return (
            <div 
                className='w-full h-full fixed top-0 left-0 backdrop-blur-3xl bg-black/20 flex justify-center items-center z-[9999]'
                style={{
                    backdropFilter: 'blur(70px)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
            
                <img 
                    src="/close.png" 
                    alt="" 
                    className='w-12 h-12 absolute top-5 right-10 rounded-full p-3 cursor-pointer bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:scale-125 duration-100 z-50'
                    onClick={(e) => {
                        e.stopPropagation()
                        setImageSelected(null)
                    }}
                />


                <div 
                    className='w-20 h-20 m-10 rounded-full flex justify-center items-center bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:scale-125 duration-100'
                    onClick={() => currentSlide > 0 &&  setCurrentSlide(currentSlide - 1)}
                >
                    <img 
                        src="left.png" 
                        alt="prev"
                        className='w-full h-full' 
                    />
                </div>

                <div 
                    className='min-w-[1000px] w-[1000px] h-[90%] rounded-2xl overflow-x-scroll scrollbar-hide relative'
                    
                >
                    <div 
                        className={`w-fit h-full rounded-2xl flex flex-row justify-star duration-500`}
                        ref={slidesRef}
                    >
                        
                        {
                            images.map((image, index) => (
                                <div 
                                    key={index}
                                    className='w-[1000px] h-full flex justify-center items-center'
                                >
                                    <img 
                                        src={image}
                                        alt="image"
                                        className='max-w-full max-h-full rounded-2xl object-contain'
                                    />    
                                </div>
                            ))
                            
                        }
                        

                    </div>
                </div>

                <div 
                    className='w-20 h-20 m-10 rounded-full flex justify-center items-center bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:scale-110 duration-100'
                    onClick={() => currentSlide < images.length -1 && setCurrentSlide(currentSlide + 1)}
                >
                    <img 
                        src="right.png" 
                        alt="prev"
                        className='w-full h-full' 
                    />
                </div>

            </div>

        )
    }


}

export default ImageRotator;