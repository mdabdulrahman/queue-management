import React,{useState} from 'react'
import NewAccbtn from './NewAccbtn';
import SignInbtn from './SignInbtn'
import logo from  "./logo.png"
import Menu from './Menu';

function Header(props) {

  const [mobile, setmobile] = useState(window.outerWidth)
const [menu, setmenu] = useState(false)

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
let Omenu=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" onClick={()=>setmenu(!menu)} strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>
let Cmenu=<svg xmlns="http://www.w3.org/2000/svg" onClick={()=>setmenu(!menu)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>

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
    <div className='z-10 sticky top-0 '>
      <div className='header '>
        <div className='wrap'>
{menu?Cmenu:Omenu}
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
       <div>
             {menu?props.children:null}
       </div>
       </div>
 
      
    )
  }
}

export default Header