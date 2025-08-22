import { ProjectParams } from '@/types'
import React, { MouseEventHandler } from 'react'

interface Props {
    src: string
    title: string
    description: string
    sense: string,
    onClick: MouseEventHandler<HTMLDivElement>
}

const ProjectCard = ({src, title, description, sense, onClick}: Props) => {
  return (
    <div 
      className=' w-[90%] sm:w-[450px] flex flex-col justify-between relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] p-2'
    >

        <div className='w-full h-[300px] sm:h-[300px] opacity-70 rounded-lg overflow-hidden'>
          <img 
              src={src}
              alt={title}
              className='w-full h-full object-cover rounded-lg'
          />
        </div>

        <div className=' relative p-4'>
            <h1 className='text-2xl font-semibold text-white'>{title}</h1>
            <p className='mt-2 text-gray-300'>{description.length > 150 ? description.slice(0, 150) + '...': description}</p>
            <p className='text-gray-500 mt-2'>{sense}</p>
        </div>
        <div className='w-full flex items-end justify-end '>
          <span className=' z-[60] select-none
            text-white m-2 rounded-sm p-2 font-bold text-sm bg-gradient-to-r from-purple-900 to-cyan-900 cursor-pointer
            hover:bg-gradient-to-l
          '
          onClick={onClick}
          >
            Read More
          </span>
        </div>
      
    </div>
  )
}

export default ProjectCard
