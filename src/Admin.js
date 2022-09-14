import React from 'react'
import {startTransition} from 'react';
import { useState,useEffect } from 'react';
import Header from './Components/Header'
import { get,child,ref} from "firebase/database";
import db from "./Components/firebase/db.js"
export default function Admin() {
   
   const [datas, setdatas] = useState([]);
    const [view, setview] = useState(false)
    const [request, setrequest] = useState("")
    get(child(ref(db), `NewAccount`)).then((snapshot) => {
      if (snapshot.exists()) {
setdatas(Object.keys(snapshot.val()).map(key=>snapshot.val()[key]))
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    
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
