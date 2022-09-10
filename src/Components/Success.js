import React from 'react'
import tick from "./checked.png"

function Success(props) {
  return (
    <div className='success'>
      <div className='flex justify-center'>  <img className='w-12' src={tick}></img></div>
        {props.info}
    <button className='success-btn' onClick={()=>{window.location.reload()}} >OK</button>
    </div>

  )
}

export default Success