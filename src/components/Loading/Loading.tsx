import React from 'react'
import './Loading.css'

function Loading() {
  return (
    <div className='loading'>
      <div className='img-container'>
        <img className='logo-load' src="./img/logo.png" alt="Logo" />
      </div>
    </div>
  )
}

export default Loading