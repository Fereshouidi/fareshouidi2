'use client';
import { projects } from '@/constents'
import React, { useEffect, useState } from 'react'
import ProjectCard from '../sub/projectCard'
import { ProjectParams } from '@/types';
import ProjectDetailsSection from './projectDetailsSection';

const Projects = () => {

    const [projectSelected, setProjectSelected] = useState<ProjectParams | null>(null);

    // useEffect(() => {
    //     alert(projectSelected?._id)
    // }, [projectSelected])

  return (
    <div id='projects' className='flex flex-col items-center justify-center py-10'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-24'>
            My Projects
        </h1>
        <div className='w-full h-full flex flex-row flex-wrap justify-center gap-8 sm:px-10 '>
            {projects.map((project) => (
                <ProjectCard
                    key={project._id}
                    src={project.background_img}
                    title={project.name}
                    description={project.about}
                    sense={project.sense?? ''}
                    onClick={() => setProjectSelected(project)}
                />
            ))}
        </div>

        <ProjectDetailsSection
            projectSelected={projectSelected}
            setProjectSelected={setProjectSelected}
        />

    </div>
  )
}

export default Projects
