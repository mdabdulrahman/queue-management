import React,{useState} from 'react'
import NewAccbtn from './NewAccbtn';
import SignInbtn from './SignInbtn'
import logo from  "./logo.png"

function Header(props) {
  console.log(window.outerWidth)
  const [mobile, setmobile] = useState(window.outerWidth)

let btn1;
let btn2
if (props.btn=="signIn"){
  
  btn1=<SignInbtn />
}
else if (props.btn=="create"){
  btn1=<NewAccbtn/>
}
else if(props.btn==""){
  btn1=<SignInbtn/>
  btn2=mobile>600?<NewAccbtn/>:null
  
}


  return (
    <div className='header'>
   <div className='wrap flex items-center gap-2 font-black'>
    <img className='secondary-bg rounded-full p-1 w-11' src={logo}></img>
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