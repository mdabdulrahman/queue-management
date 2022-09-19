import React from 'react'
import intro from "./into.jpg"
import Menu from '../Menu'
function Intro() {
  return (
    <div className='h-screen'>
     
<img src={intro} className="w-screen absolute h-[90%] blur-sm object-cover brightness-50 "></img>

  <div className="inner-intro">
 <span >
  <h1 className='intro-text text-center text-5xl animate__animated animate__backInDown'>No More Standing In Queues </h1>
<h1 className='text-center py-3 intro-text-2 '>Manage Queues in Your Shop Online</h1>
 <button className='btn-secondary   shadow mx-auto'>Get Started</button>
 </span>
   </div>
   <Menu/>
    </div>
  )
}

export default Intro