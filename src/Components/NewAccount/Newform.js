import dbfirestore from '../firebase/DatabaseStore'
import React, { useRef,useState } from 'react'
import emailjs from '@emailjs/browser';
import { doc, setDoc} from "firebase/firestore"; 
import Form from './Form';
import Success from '../Success';
import Fail from '../Fail';
import {useNavigate} from "react-router-dom"
function Newform() {
    const navigate = useNavigate();
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
   /*      set(sRef(db, 'NewAccount/' + aplno), values()); */
        const docRef =  setDoc(doc(dbfirestore, "NewAccount",aplno),values()); 

       
NewAccountMail({Oname:Oname.current.value,bname:bname.current.value,email:email.current.value,aplno:aplno})
setApplicationNo(aplno) 
setStatus(true)
      
      } catch (e) {
        console.error("Error adding document: ", e);
        setStatus(false)
      }
     
}
let scountry=(val)=>{
    if (val!=null){
setcountry(val)}
return country
}
let scity=(val)=>{
    if (val!=null){
setCity(val)}
return city
}
let sstate=(val)=>{
    if (val!=null){
setState(val)}
return state
}

let validate=()=>{
console.log(number.current.validity.valid);
if (number.current.value!=""&&bname.current.value!=""&&btype.current.value!=""&&Oname.current.value!=""&&email.current.value!=""&&number.current.validity.valid&&adrs.current.value!=""&&gurl.current.value!=""&&country!=""&&state!=""&&city!=""){
add()
}
else{
    let val=[bname.current,number.current,btype.current,Oname.current,email.current,adrs.current,gurl.current,state,city,country]
   try{ val.map((g)=>g.classList.remove("wrongInput"))}catch(e){}
    let filtered=val.filter((v)=>v.value=="")
    /* let numVald=()=>{number.current.validity.valid==false?number.current.classList.add("wrongInput"):console.log("wrong")} */
    filtered.map((g)=>g.classList.add("wrongInput"))
    window.scroll(0,0)
}
}

    const bname=useRef("")
    const btype=useRef("")
    const Oname=useRef("")
    const email=useRef("")
    const number=useRef("")
    const     adrs=useRef("")
    const    gurl=useRef("")
    const [country, setcountry] = useState("");
const [state, setState] = useState("");
    const [city,setCity]=useState("")
const aplnoGenerate=Math.ceil(Math.random()*10000000000)
   let values=()=>{return {
        aplno:aplnoGenerate,
        bname:bname.current.value,
        btype:btype.current.value,
        Oname:Oname.current.value,
        email:email.current.value,
        number:number.current.value,
        adrs:adrs.current.value,
        gurl:gurl.current.value,
        country:country,
        state:state,
        city:city,
        status:null

   }}
  
   if (Status==null){
  return (
<Form bname={bname} btype={btype} Oname={Oname} email={email} number={number} adrs={adrs} gurl={gurl} country={scountry} city={scity} state={sstate} add={validate}/>
    )}
    else if (Status==true){
        return(<Success info={`Your Application has been Successfully submited ! Your Application NO : ${ApplicationNo} and Your Application will be reviwed in 24 hrs .Status will be shared via Mail`}/>)
    }
    else{
        return(<Fail info={`There was an problem in applying ,Please try again or report this issue to us via email : queuesystem2022@gmail.com`}/>)
    }
}

export default Newform