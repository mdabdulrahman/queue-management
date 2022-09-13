import React from 'react'
import {startTransition} from 'react';
import { useState,useEffect } from 'react';
import Header from './Components/Header'
import useAdminfirestore from './Components/snap';
import dbfirestore from './Components/firebase/DatabaseStore';
import { doc, onSnapshot,collection } from "firebase/firestore";
export default function Admin() {
    const datas = useAdminfirestore()
    const [view, setview] = useState(false)
    const [request, setrequest] = useState("")
   
    let noview=(obj)=>{
      return (<div key={obj.aplno} className="noview">
        <h1>Type : {obj.btype}</h1>
        <h1>{obj.bname}</h1>
        <h1>{obj.aplno}</h1>
        <button className='btn-secondary'>View</button>
        </div>)
    }
    let onview=(obj)=>{
      return (<div key={obj.aplno}>
        <h1>{obj.bname}</h1>
        </div>)
    }

useEffect(() => {
  try{
    
  setrequest(datas.map((d)=>{return view?onview(d):noview(d)}))
  }catch(e){

  }
}, [datas])

   


   
    
  return (
    <div>
        <Header btn={null}/>
        <h1 className='text-lg  font-bold text-center m-6'>Application Details</h1>
        <div className='flex w-3/4 border mx-auto p-6 justify-between font-bold'>
          <h1>Buisness Type</h1>
          <h1>Buisness Name</h1>
          <h1>Application No</h1>
          <h1>View</h1>
        </div>
        <div>
        { request}
        </div>
    </div>
  )
}
