import React, { useRef,useState,useEffect } from 'react'
import QrCreator from 'qr-creator'
import { getDatabase, ref, onValue,set,update, get} from "firebase/database";
import db from "../firebase/db"
import Header from '../Header';
function Create() {
  const [currentView,setcurrentView]=useState("home")
  const [id,setid]=useState(window.localStorage.getItem("custId"))
  const [Qdata,setQdata]=useState("")
  const [Udata,setUdata]=useState("")
  const [pos,setpos]=useState(null)
  const [preStatus,setpreStatus]=useState(-1)
  console.log(id)


  useEffect(()=>
  {console.log("useeffect")
    if(id!=null)
    {

      const refr = ref(db, 'tempcust/'+id);
      onValue(refr, (snapshot) => {
        console.log("onval")
        const data = snapshot.val();

    setUdata(data);


    if(data.status===true)
    {
      window.localStorage.removeItem("custId")
      window.localStorage.removeItem("pos")
      setid(null)
      window.location.reload()
    }
     if(data.read===true)
     {

      onValue(ref(db,'queues/shopsq/'+data.shopSessionId),
      (snapshot)=>{
        setQdata(snapshot.val())
        console.log(snapshot.val())
        console.log(snapshot.val().cust)
        let r=Object.values(snapshot.val().cust).map((r)=>r)
        if(r.indexOf(id)==-1)
        {
          update(ref(db,'tempcust/'+id),{status:true})
            window.localStorage.removeItem("tot")
        }
      console.log(r.indexOf(id)+1)
      setpos(r.indexOf(id))
    window.localStorage.setItem("pos",r.indexOf(id))
        /*  if(window.localStorage.getItem("tot")==null){
        window.localStorage.setItem("tot",snapshot.val().tot)
        }
        else if(window.localStorage.getItem("tot")!=snapshot.val().tot){

      posMinus(snapshot.val())
        }
   */
      }
      )
      setcurrentView("onQ")
     }


      });



    }

  },[id])

/* let posMinus=(d)=>
{


        let num=parseInt(window.localStorage.getItem("pos"))-1

          update(ref(db,'tempcust/'+id),{pos:num}).then(()=>{
          if(num==0){
            update(ref(db,'tempcust/'+id),{status:true})
            window.localStorage.removeItem("tot")
          }

        window.localStorage.setItem("tot",d.tot);})


} */

  const img=useRef()
    let get=()=>{
let cid=Math.round(Math.random()*100000*3*2)+"queue"+Math.round(Math.random()*100000);
set(ref(db,"tempcust/"+cid),{read:false,shopSessionId:"",status:false,pos:0})
    QrCreator.render(
        {
            text:cid,
            radius:1.0,
            ecLevel:'H',
            fill:"black",
            background:"white",
            size:128
        },
        document.querySelector('#qr-code')
    )
window.localStorage.setItem("custId",cid)
setid(cid)

  }
  return (
    <div className='font-["Poppins"]'>
        <Header/>
        {currentView==="home"?
        <>
        <div>
                <h1 className='text-xl flex items-center gap-2 justify-center font-semibold my-4'>

          Show this QR Code</h1>
          </div>
          <div className=' mt-28 w-full'>
          <div className='text-center '>

          <button className='bg-blue-500 my-3 px-6 p-2 text-white ' onClick={()=>get()}>Get QR Code</button>
          {/* {id!=null?<button className='bg-green-500  px-6 p-2 text-white ' onClick={()=>id=id}>Scanned</button>:null} */}
          </div>
          <div className='w-1/2 mx-auto'>
          <canvas ref={img} className='my-11 mx-auto ' id="qr-code">

          </canvas>

</div>
          </div></>:currentView==="onQ"?<div className='w-5/6 lg:w-2/6 mx-auto text-center'>

<h1 className='text-lg p-3 my-4 rounded-sm shadow-md text-white primary-bg secondary-txt text-center'>Welcome to {Qdata.name}</h1>
<h1 className='text-md w-2/4 mx-auto p-2 my-3 rounded-sm shadow-md text-white secondary-bg primary-text text-center'>{Qdata.ssName}</h1>
<div className='border-2 my-4 w-3/4 mx-auto rounded p-3'>
<h1 className='font-semibold  text-xl mb-2'>Your Position  </h1>
 <p className='w-1/6 my-4   text-center mx-auto text-3xl font-bold'> {pos}</p>
<h1>Queue Length : {Qdata.tot}</h1>

</div>
{pos==1?<h1 className='text-lg success font-bold text-center'>Code : {id.slice(-4)}</h1>:null}
<svg fill="none" stroke="currentColor" className='w-8 mx-auto p-2  secondary-bg rounded-full' strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
</svg>
<div className='secondary-bg'>

<h1 className='text-md p-2 primary-text text-center'>{Qdata.message}</h1>
        </div>
        <button className='fail-btn py-2 my-2' onClick={()=>{

  window.localStorage.removeItem("custId")
  setid(null)
  window.location.reload()
}}>Leave</button>
          </div>:null
}

    </div>
  )
}

export default Create
