import React from 'react'
import {useNavigate} from "react-router-dom"
function NewAccbtn() {
 
    const navigate = useNavigate();
    
  return (
    <div><button className='btn-primary' onClick={()=>navigate("/NewAccount")}>Create Account</button></div>
  )
}

export default NewAccbtn