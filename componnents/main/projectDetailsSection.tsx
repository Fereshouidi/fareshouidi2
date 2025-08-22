'use client';
import { ProjectDetailsSectionParams } from '@/types';
import React, { useState } from 'react'
import ImageRotator from '../sub/ImageRotator';

const ProjectDetailsSection = ({
    projectSelected,
    setProjectSelected
}: ProjectDetailsSectionParams) => {
    
    const [limit, setLimit] = useState<number>(3);
    const [imageSelected, setImageSelect] = useState<string | null>(null);

    if (!projectSelected) return;

  return (
    <div className='w-full h-full fixed top-0 left-0 bg-transparent backdrop-blur-2xl z-[70] p-2 flex flex-col items-center'>

        <div 
            className='w-[90%] sm:w-[1000px] h-16 flex justify-center items-center rounded-full backdrop-blur-3xl mt-2 sm:mt-5'
            style={{
                boxShadow: '0 5px 45px #00000070'
            }}
        >
            <h1 className='text-white'>{
                projectSelected?.name.length > 20 ? 
                projectSelected?.name.slice(0, 20) + '...' : 
                projectSelected?.name}
            </h1>

            <div className='flex justify-end rounded-full absolute right-3 w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] '>
                <img 
                    src="/close.png" 
                    alt="" 
                    className='rounded-full p-3 cursor-pointer bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:scale-125 duration-100 z-50'
                    onClick={() => {
                        setProjectSelected(null);
                        setLimit(3)
                    }}
                />
            </div>

        </div>

        <div className='w-full sm:w-[1000px] h-full relative overflow-y-scroll scrollbar-hide p-4 pt-0 rounded-2xl'>

            <p className='text-white p-5'>{projectSelected?.about}</p>

            <div className='flex flex-row justify-center flex-wrap gap-5 p-5'>

                {projectSelected.images.slice(0, limit).map((image) => (
                    <div 
                        key={image}
                        className='w-[270px] rounded-2xl cursor-pointer'
                        onClick={() => setImageSelect(image)}
                    >
                        <img 
                            src={image}
                            alt="image" 
                            className='w-full h-full rounded-2xl'
                        />

                        {imageSelected && <ImageRotator
                            imageSelected={imageSelected}
                            setImageSelected={setImageSelect}
                            images={projectSelected.images}
                        />}

                    </div>
                ))}

                {limit < projectSelected.images.length && <button 
                    className='bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full px-2 py-1 cursor-pointer'
                    onClick={() => setLimit(limit + 3)}
                >
                    show more
                </button>}
            </div>

            <div className='text-white' dangerouslySetInnerHTML={{ __html: projectSelected.discription }} />
            {/* <p className='text-white p-5'>{projectSelected.discription}</p> */}
        </div>

    </div>
  )
}

export default ProjectDetailsSection;