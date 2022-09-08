
import React, { useRef } from 'react'
import { doc, setDoc , collection, addDoc} from "firebase/firestore"; 
import dbfirestore from '../firebase/DatabaseStore'
import pic from "./ni.jpg"
function Newform() {
let add=()=>{
    try {
        const docRef =  addDoc(collection(dbfirestore, "NewAccount"),values());
        alert("Your Application has been sent :"+values().email)
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