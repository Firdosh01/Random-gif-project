import React, { useState } from 'react'

function Random() {

  const [gif, setGif] = useState('')

  function clickHandler() {
    
  }

  return (
    <div className='w-1/2 bg-green-500 h-[450px] rounded-lg border-black flex flex-col 
    items-center  gap-y-5 mt-14'>
      
      <h1 className='text-3xl font-bold underline uppercase '>A Random Gif</h1>
      <img src={gif} width="400" />

      <button className='w-10/12 py-2 bg-white rounded-lg ' onClick={clickHandler}>
        Generate
      </button>
    </div>
  )
}

export default Random
