import React,{useState,useEffect} from 'react'
import QrScanner from 'qr-scanner';
import load from './load.gif';
import icon from "./icon.png";
import Header from '../Header';
function Reader(props) {
    /* use states */
  /* strated useState used to identify the scanning is started */
  const [started,setStarted]=useState(false)
  
  const [resultTxt,setResultTxt]=useState("")
  /* When qr code get an result */
  let done=(result,qrScanner)=>{
    qrScanner.stop()
    setResultTxt(result)
 
   props.finish(result)
    /* setButton(<button className='p-2 m-2 rounded primary-bg secondary-text' onClick={()=>qrScanner.stop()}>Stop</button>) */

  }
  /* starting the scan */
let scan=()=>{
setStarted(true)
setButton("")
  let video=document.getElementById("qr")
  const qrScanner = new QrScanner(
    video,
    result => done(result,qrScanner),
    // No options provided. This will use the old api and is deprecated in the current version until next major version.
    );
    qrScanner.start()
}
/* to change scannow button to scanning when scan started */
const [button,setButton]=useState( <button className='p-3 my-40 z-20 shadow-sm rounded bg-blue-500 text-white ' onClick={scan}>Scan Now</button>)
  console.log(load)
useEffect(()=>{
  console.log(resultTxt)
})

let ico=<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"  >
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
</svg>
return (
    <div className='font-["Poppins"]'>
   
      <div className='container   w-full h-full mx-auto text-center'>
       
        
        
        <div className=''>
        <img className="absolute w-3/4 mx-11 mt-11 z-10" src={load} alt="load"></img>
      <video id="qr" className='  md:w-2/4 md:h-full    mx-auto'  ></video>
    </div>
    
   
    <div className='w-full absolute font-semibold text-sm overflow-x-scroll bottom-0 bg-gray-200'>
     
    </div>
    {button}
</div>
    </div>
  )
}
export default Reader