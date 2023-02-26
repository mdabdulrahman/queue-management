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
          </div></>:currentView==="onQ"?<div className='w-3/4 mx-auto text-center'>
<h1 className='text-lg font-bold text-center'>Shop Name:{Qdata.name}</h1>
<h1 className='text-lg font-bold text-center'>Session Name:{Qdata.ssName}</h1>

<h1 className='font-bold text-lg'>Your Position : {pos}</h1>
<h1>Queue Length : {Qdata.tot}</h1>
<button className='bg-red-500 p-3' onClick={()=>{
  window.localStorage.removeItem("custId")
  setid(null)
  window.location.reload()
}}>Leave</button>
{pos==1?<h1 className='text-lg font-bold text-center'>Code :{id.slice(-4)}</h1>:null}
<h1 className='text-lg font-bold text-center'>Message :{Qdata.message}</h1>
          </div>:null
}

    </div>
  )
}

export default Create
