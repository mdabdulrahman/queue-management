import React,{useState,useEffect} from 'react'
import QrScanner from 'qr-scanner';
function Reader() {
  /* When qr code get an result */
  let done=(result,qrScanner)=>{
    setResultTxt(result)
    setButton(resultTxt)
    setButton(<button className='p-2 m-2 rounded primary-bg secondary-text' onClick={scan}>Scan Now</button>)
    console.log(result)
    qrScanner.stop()
    /* to validate the qr code */

  }
  /* starting the scan */
let scan=()=>{
setStarted(true)
setButton(resultTxt)
  let video=document.getElementById("qr")
  const qrScanner = new QrScanner(
    video,
    result => done(result,qrScanner),
    // No options provided. This will use the old api and is deprecated in the current version until next major version.
    );
    qrScanner.start()
}
  /* use states */
  /* strated useState used to identify the scanning is started */
  const [started,setStarted]=useState(false)
  /* to change scannow button to scanning when scan started */
  const [button,setButton]=useState( <button className='p-2 m-2 rounded primary-bg secondary-text' onClick={scan}>Scan Now</button>)
  const [resultTxt,setResultTxt]=useState("Scannning...")
  
useEffect(()=>{
  console.log(resultTxt)
})
return (
    <div>
      <video id="qr" width="250" height="250" ></video>
    {button}

    </div>
  )
}
export default Reader