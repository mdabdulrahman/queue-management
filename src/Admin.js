import React from 'react'
import dbfirestore from './Components/firebase/DatabaseStore.js';
import { useState,useEffect} from 'react';
import {onSnapshot,collection} from "firebase/firestore";
import useAdminfirestore from "./Components/snap.js"
import Header from './Components/Header'
export default function Admin() {
    const [view, setview] = useState(false)
    const [request, setrequest] = useState("") 
 const datas=useAdminfirestore()
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
useEffect(()=>{
  console.log(datas.length)
  try{
    
    setrequest(datas.map((d)=>{return view?onview(d):noview(d)}))
    }catch(e){
  console.log(e)
    }
},[datas.length])   
const unsubscribe = onSnapshot(collection(dbfirestore, "NewAccount"), (snapshot) => {
  window.localStorage.setItem("data", JSON.stringify(snapshot.docs.map((doc)=>{return doc.data()}).length))
 if(JSON.parse(localStorage.getItem("data"))!=datas.length){
  try{
    
    setrequest(datas.map((d)=>{return view?onview(d):noview(d)}))
    }catch(e){
  console.log(e)
    }
 }
});   
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
