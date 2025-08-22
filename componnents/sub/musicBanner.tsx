import React, { useState } from 'react'

interface props {
    visible: boolean,
    setVisible: (value: boolean) => void
}

const MusicBanner = ({
    visible,
    setVisible
}: props) => {

  return (
    <div className={`${visible ? 'flex' : 'invisible'} fixed top-0 left-0 w-full h-[100vh] backdrop-blur-sm z-[80] justify-center`}>
      <div 
        className=' fixed top-[50%] translate-y-[-50%] rounded-2xl backdrop-blur-[500px] p-5 max-w-[300px]'
          style={{
            borderWidth: '1px',
            borderRadius: '10px',
            borderStyle: 'solid',
            borderImage: 'linear-gradient(to right, purple, cyan) 1',
        }}
    >
        <p className='cursive w-full text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold'>Beautiful background music is playing to enhance your browsing experience. Sit back and enjoy!</p>
        
        <span 
            className='
                flex flex-1 text-white bg-gradient-to-r from-purple-500 to-cyan-500 justify-center items-center rounded-sm p-2 mt-3 cursor-pointer
                hover:bg-[linear-gradient(to_right,rgba(168,85,247,0.7),rgb(6,182,212),rgb(168,85,247),rgba(6,182,212,0.7))]
            '
            onClick={() => setVisible(false)}
            >ok</span>
      </div>
    </div>
  )
}

export default MusicBanner
