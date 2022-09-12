import React from 'react'
import NewAccbtn from './NewAccbtn';
import SignInbtn from './SignInbtn'


function Header(props) {
let btn1;
let btn2
if (props.btn=="signIn"){
  btn1=<SignInbtn/>
}
else if (props.btn=="create"){
  btn1=<NewAccbtn/>
}
else if(props.btn==""){
  btn1=<SignInbtn/>
  btn2=<NewAccbtn/>
  
}

  return (
    <div className='header'>
   <div className='wrap font-black'>
    Queue System
   </div>
   <div className='flex'>
   <div className='wrap'>
    {btn1}
   
   </div>
   <div className='wrap'>
    {btn2}
   
   </div>
    </div>
    </div>
  )
}

export default Header