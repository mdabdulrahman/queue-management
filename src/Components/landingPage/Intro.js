import React from 'react'
import intro from "./into.jpg"
function Intro() {
  return (
    <div className='h-screen'>
<img src={intro} className="w-screen absolute h-[90%] blur-sm object-cover brightness-75"></img>
  <div className="absolute w-full flex justify-center items-center h-full">
 <span >
  <h1 className='intro-text text-5xl animate__animated animate__backInDown'>No More Standing In Queues </h1>
<h1 className='text-center py-3 intro-text text-2xl'>Manage Queues in Your Shop Online</h1>
 <button className='btn-secondary w-1/4 h-1/4  shadow mx-auto'>Get Started</button>
 </span>
   </div>
    </div>
  )
}

export default Intro