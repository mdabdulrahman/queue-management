import React,{useState} from 'react'
import NewAccbtn from './NewAccbtn';
import SignInbtn from './SignInbtn'
import logo from  "./logo.png"
import Menu from './Menu';

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

if (mobile>=600){
  

  return (
    <div>
    <div className='header'>
   <div className='wrap flex items-center gap-2 font-black'>
    <img className=' rounded-full p-1 w-11' src={logo}></img>
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
    </div>
  )}
  else{
    return(
      <div className='sticky'>
      <div className='header '>
        <div className='wrap'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>
</div>

      <div className='wrap flex items-center gap-2 font-black'>
       <img className=' rounded-full p-1 w-11' src={logo}></img>
  
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
       </div>
    )
  }
}

export default Header