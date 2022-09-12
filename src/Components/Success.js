import React from 'react'
import tick from "./checked.png"
import {useNavigate} from "react-router-dom"

function Success(props) {
  const navigate=useNavigate()
  return (
    <div className='success'>
      <div className='flex justify-center'>  <img className='w-12' src={tick}></img></div>
        {props.info}
    <button className='success-btn' onClick={(e)=>e.preventDefault} >OK</button>
    </div>

  )
}

export default Success