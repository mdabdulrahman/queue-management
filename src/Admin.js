import React from 'react'
import emailjs from '@emailjs/browser';
import dbfirestore from './Components/firebase/DatabaseStore.js';
import { useState,useEffect} from 'react';
import {setDoc,onSnapshot,deleteDoc,collection,updateDoc,doc} from "firebase/firestore";
import useAdminfirestore from "./Components/snap.js"
import Header from './Components/Header'
import AplList from './Components/admin/AplList.js';
import { Navigate, useNavigate } from 'react-router-dom';
export default function Admin(props) {
    const [view, setview] = useState(false)
    const [request, setrequest] = useState("") 
    const navigate=useNavigate
const datas=useAdminfirestore(collection(dbfirestore, "NewAccount"))
 
 
 emailjs.init("cIeMk0LUDw2EwLRfP")
 let accept=(obj)=>{
  let userdata={...obj,vcode:(Math.floor((Math.random()*10000))),status:true}
console.log(userdata)
try{

   setDoc(doc(dbfirestore, "AcceptedAccount",String(userdata.aplno)),userdata); 
   deleteDoc(doc(dbfirestore, "NewAccount", String(userdata.aplno)));
   emailjs.send('service_u92gbxa', 'template_uwms6wa',userdata, 'ktsY8XEB_EZdw3YDx')
}
catch(e){

}
 }
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
  setDoc(doc(dbfirestore, "RejectAccount",String(aplno)),{...obj,status:false}); 
  deleteDoc(doc(dbfirestore, "NewAccount", String(aplno)));
  rejectMail({Oname:obj.Oname,aplno:aplno,reason:reason,email:obj.email})
 
}catch(e){
    console.log(e)
  }
 
 }

    
useEffect(()=>{
 
  try{
    
    setrequest(datas.map((d)=>{return <AplList key={d.aplno} data={d} reject={reject} accept={accept} />  }))
    }catch(e){
  console.log(e)
    }
},[datas.length]) 

const unsubscribe = onSnapshot(collection(dbfirestore, "NewAccount"), (snapshot) => {
  window.localStorage.setItem("data", JSON.stringify(snapshot.docs.map((doc)=>{return doc.data()}).length))
 if(JSON.parse(localStorage.getItem("data"))!=datas.length){
  try{
   
    setrequest(datas.map((d)=>{return <AplList key={d.aplno} data={d} reject={reject} accept={accept} />  }))
    }catch(e){
  console.log(e)
    }
 }
});  
const [checkAdmin, setcheckAdmin] = useState(false)
useEffect(()=>{
  
if(props.uid!="oxT7SbBZzxQqIlAfpFODYAJnWKn2"){
console.log("access denied")
setcheckAdmin(false)
}
else{
  alert("Welcome admin")
  setcheckAdmin(true)
}},[props.uid])
let content=<><Header btn={"signOut"}/>
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
</div></>
  return (
    <div >
    {checkAdmin?content:<h1 className='text-red-500 text-center text-3xl'>Access denied</h1>}
    </div>
  )
}
