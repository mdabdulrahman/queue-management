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
  deleteDoc(doc(dbfirestore, "NewAccount", String(aplno)));
  rejectMail({Oname:obj.Oname,aplno:aplno,reason:reason,email:obj.email})
 
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
        <h1 className='text-lg  font-bold  flex items-center justify-center gap-2 m-6'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>

          Application Details</h1>
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
