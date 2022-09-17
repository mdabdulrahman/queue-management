import React from 'react'
import emailjs from '@emailjs/browser';
import dbfirestore from './Components/firebase/DatabaseStore.js';
import { useState,useEffect} from 'react';
import {setDoc,onSnapshot,deleteDoc,collection,updateDoc,doc} from "firebase/firestore";
import useAdminfirestore from "./Components/snap.js"
import Header from './Components/Header'
import AplList from './Components/admin/AplList.js';
export default function Admin() {
    const [view, setview] = useState(false)
    const [request, setrequest] = useState("") 
const datas=useAdminfirestore()
 
 
 emailjs.init("cIeMk0LUDw2EwLRfP")
 let rejectMail=(obj)=>{
  emailjs.send('service_964xhgh', 'template_1zc9cvy',obj, 'cIeMk0LUDw2EwLRfP')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
 }
 let reject=(aplno,reason,obj)=>{
  console.log(obj)
  try{
  updateDoc(doc(dbfirestore,"NewAccount",String(aplno)), {
   status:false
  });
  setDoc(doc(dbfirestore, "RejectAccount",String(aplno)),obj); 
  rejectMail({Oname:obj.Oname,aplno:aplno,reason:reason,email:obj.email})
  deleteDoc(doc(dbfirestore, "NewAccount", String(aplno)));
}catch(e){
    console.log(e)
  }
 
 }

    
useEffect(()=>{
  console.log(datas.length)
  try{
    
    setrequest(datas.map((d)=>{return <AplList key={d.aplno} data={d} reject={reject}/> }))
    }catch(e){
  console.log(e)
    }
},[datas.length]) 

const unsubscribe = onSnapshot(collection(dbfirestore, "NewAccount"), (snapshot) => {
  window.localStorage.setItem("data", JSON.stringify(snapshot.docs.map((doc)=>{return doc.data()}).length))
 if(JSON.parse(localStorage.getItem("data"))!=datas.length){
  try{
   
    setrequest(datas.map((d)=>{return <AplList key={d.aplno} data={d} reject={reject}/> }))
    }catch(e){
  console.log(e)
    }
 }
});  

  return (
    <div >
        <Header btn={null}/>
        <h1 className='text-lg  font-bold text-center m-6'>Application Details</h1>
        <div className='flex w-3/5 border-b mx-auto p-6 justify-between font-bold'>
          <h1>Buisness Type</h1>
          <h1>Buisness Name</h1>
          <h1>Application No</h1>
          <h1>View</h1>
        </div>
        <div >
        { request}
        </div>
    </div>
  )
}
