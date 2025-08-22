'use client';
import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constents';
import React from 'react'
import SkillDataProvider from '../sub/skillDataProvider';
import SkillText from '../sub/skillText';

const Skills = () => {
  return (
    <section 
        id='skills'
        className='flex w-full flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-30 py-20 '
        style={{transform: 'scale(0.9)'}}
    >

        <SkillText/>
        <div className='flex flex-row justify-around flex-wrap gap-5 items-center'>
            {Skill_data.map((skill, index) => (
                <SkillDataProvider
                    width={skill.width}
                    height={skill.height}
                    src={skill.Image}
                    index={index}
                    key={skill.skill_name}
                />
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap gap-5 items-center'>
            {Frontend_skill.map((skill, index) => (
                <SkillDataProvider
                    width={skill.width}
                    height={skill.height}
                    src={skill.Image}
                    index={index}
                    key={skill.skill_name}
                />
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap gap-5 items-center'>
            {Backend_skill.map((skill, index) => (
                <SkillDataProvider
                    width={skill.width}
                    height={skill.height}
                    src={skill.Image}
                    index={index}
                    key={skill.skill_name}
                />
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap gap-5 items-center'>
            {Full_stack.map((skill, index) => (
                <SkillDataProvider
                    width={skill.width}
                    height={skill.height}
                    src={skill.Image}
                    index={index}
                    key={skill.skill_name}
                />
            ))}
        </div>
        {/* <div className='flex flex-row justify-around flex-wrap gap-5 items-center'>
            {Other_skill.map((skill, index) => (
                <SkillDataProvider
                    width={skill.width}
                    height={skill.height}
                    src={skill.Image}
                    index={index}
                    key={skill.skill_name}
                />
            ))}
        </div> */}

        <div className='w-full h-full absolute'>
            <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
                <video
                    className='w-full h-auto'
                    preload='false'
                    playsInline
                    loop
                    muted
                    autoPlay
                    src={'/cards-video.webm'}
                />
            </div>
        </div>
    </section>
  )
}

export default Skills;
