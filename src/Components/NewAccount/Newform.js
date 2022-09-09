import dbfirestore from '../firebase/DatabaseStore'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { doc, setDoc , collection, addDoc} from "firebase/firestore"; 

function Newform() {

    /* Sending email to new account */
    emailjs.init("nsIPDphWPHf1B2KaP")
let NewAccountMail=(obj)=>{
emailjs.send('service_vm00no9', 'template_khsc83l',obj, 'nsIPDphWPHf1B2KaP')
.then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});}

/* Adding to firestore */
let add=()=>{
  
    try {
        let aplno=String(values().aplno)
        const docRef =  setDoc(doc(dbfirestore, "NewAccount",aplno),values());
        alert("Your Application has been sent :"+values().email)
NewAccountMail({Oname:Oname.current.value,bname:bname.current.value,email:email.current.value,aplno:aplno})
 
      
      } catch (e) {
        console.error("Error adding document: ", e);
      }
     
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
    const district=useRef("")

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
        district:district.current.value

   }}
  return (
    <div >
   
        <div >
            <fieldset className='form'>
                <legend >
<h1 className='text-center text-lg py-3'>Regiter for New Buisnness Account</h1>
    <h1 className='text-sm text-center'>To Manage Queue in your Shop</h1>
    </legend>
<div className='inner-form'>
        <label>Buisness Name : </label>
        <input type="text" name="bname" ref={bname}  className='form-control' required></input>
        <label>Buisness Type :</label>
    <input type="text" className='form-control' ref={btype} name="btype"></input>
   <label>Owner Name :</label>
   <input type="text" className='form-control' ref={Oname} name="Oname"></input>
   <label>Email Id :</label>
   <input type="email" className='form-control' ref={email}  name="email"></input>
   <label>Phone Number :</label>
   <input type="text" className='form-control'  ref={number} name="number"></input>
   <label>Address of Shop :</label>
   <textarea type="text" className='h-3/4 form-control' ref={adrs}  name="adrs"></textarea>
   
   <label>Google Map location link : </label>
   <input type="url" name="gurl" ref={gurl} className='form-control '></input>
    <label>Country :</label>
    <input type="text" className='form-control' ref={country} name="country"></input>
    <label>State :</label>
    <input type="text" className='form-control' ref={state} name="state"></input>
    <label>District :</label>
    <input type="text" className='form-control' ref={district} name="district"></input>
    <button className='btn-secondary ' onClick={()=>{add()}}>Register</button>
    </div>
    </fieldset>
    </div>
    {/* <div className='  h-screen'><img src={pic} className="w-full h-full "></img></div>
     */}
</div>  )
}

export default Newform