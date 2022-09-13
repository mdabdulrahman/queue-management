import React from 'react'
import { useNavigate } from 'react-router-dom'
function SignInbtn() {
  const navigate=useNavigate()
  return (
    <div><button className='btn-primary' onClick={()=>navigate("/signin")}>Sign In</button></div>
  )
}

export default SignInbtn