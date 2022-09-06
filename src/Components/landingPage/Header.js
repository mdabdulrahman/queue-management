import React from 'react'
import SignInbtn from './SignInbtn'

function Header() {
  return (
    <div className='header'>
   <div className='wrap'>
    Queue System
   </div>
   <div className='wrap'>
    <SignInbtn/>
   </div>
    </div>
  )
}

export default Header