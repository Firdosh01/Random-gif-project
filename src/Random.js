import React, { useState } from 'react'

function Random() {

  const [gif, setGif] = useState('')

  function clickHandler() {
    
  }

  return (
    <div>
      <h1>Random Gif</h1>
      <img src={gif} width={400} />

      <button onClick={clickHandler}>
        Generate
      </button>
    </div>
  )
}

export default Random
