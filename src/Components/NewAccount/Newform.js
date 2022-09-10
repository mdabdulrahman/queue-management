import dbfirestore from '../firebase/DatabaseStore'
import React, { useRef,useState } from 'react'
import emailjs from '@emailjs/browser';
import { doc, setDoc , collection, addDoc} from "firebase/firestore"; 
import Form from './Form';
import Success from '../Success';
import Fail from '../Fail';

function Newform() {
const [Status,setStatus]=useState(null)
    /* Sending email to new account */
    emailjs.init("nsIPDphWPHf1B2KaP")
let NewAccountMail=(obj)=>{
emailjs.send('service_vm00no9', 'template_khsc83l',obj, 'nsIPDphWPHf1B2KaP')
.then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});}
const [ApplicationNo,setApplicationNo]=useState("")
/* Adding to firestore */
let add=()=>{
  
    try {
        let aplno=String(values().aplno)

        const docRef =  setDoc(doc(dbfirestore, "NewAccount",aplno),values());
       
NewAccountMail({Oname:Oname.current.value,bname:bname.current.value,email:email.current.value,aplno:aplno})
setApplicationNo(aplno) 
setStatus(true)
      
      } catch (e) {
        console.error("Error adding document: ", e);
        setStatus(false)
      }
     
}

let validate=()=>{
console.log(number.current.validity.valid);
}

    const bname=useRef("")
    const btype=useRef("")
    const Oname=useRef("")
    const email=useRef("")
    const number=useRef("")
    const     adrs=useRef("")
    const    gurl=useRef("")
    const  country=useRef("")
    const    state=useRef("")
    const city=useRef("")

   let values=()=>{return {
        aplno:Math.ceil(Math.random()*10000000000),
        bname:bname.current.value,
        btype:btype.current.value,
        Oname:Oname.current.value,
        email:email.current.value,
        number:number.current.value,
        adrs:adrs.current.value,
        gurl:gurl.current.value,
        country:country.current.value,
        state:state.current.value,
        city:city.current.value

   }}
   if (Status==null){
  return (
<Form bname={bname} btype={btype} Oname={Oname} email={email} number={number} adrs={adrs} gurl={gurl} country={country} city={city} state={state} add={validate}/>
    )}
    else if (Status==true){
        return(<Success info={`Your Application has been Successfully submited ! Your Application NO : ${ApplicationNo} and Your Application will be reviwed in 24 hrs .Status will be shared via Mail`}/>)
    }
    else{
        return(<Fail info={`There was an problem in applying ,Please try again or report this issue to us via email : queuesystem2022@gmail.com`}/>)
    }
}

export default Newform