import React, { useRef,useState } from 'react'
import QrCreator from 'qr-creator'
import { getDatabase, ref, onValue,set,update, get} from "firebase/database";
import db from "../firebase/db"
import Header from '../Header';
function Create() {
  
  
  const img=useRef()
    let get=()=>{
let id=Math.round(Math.random()*100000*3*2)+"queue"+Math.round(Math.random()*100000);
set(ref(db,"tempcust/"+id),{read:false,shopSessionId:"",status:false})
    QrCreator.render(
        {
            text:id,
            radius:1.0,
            ecLevel:'H',
            fill:"black",
            background:"white",
            size:128
        },
        document.querySelector('#qr-code')
    )


  }
  return (
    <div className='font-["Poppins"]'>
        <Header/>
        <div>
                <h1 className='text-xl flex items-center gap-2 justify-center font-semibold my-4'>
          
          Show this QR Code</h1>
          </div>
          <div className=' mt-28 w-1/2'>
          <div className='grid w-full gap-6   mx-6'>
           
          <button className='bg-blue-500 px-6 p-2 text-white ' onClick={()=>get()}>Get QR Code</button>
          </div>
          <div className='w-1/2 mx-auto'>
          <canvas ref={img} className='my-11 mx-auto ' id="qr-code">

          </canvas>

</div>
          </div>
    </div>
  )
}

export default Create