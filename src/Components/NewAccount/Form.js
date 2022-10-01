import React,{useState} from 'react'
import { countryList } from '../locationData/Countrylist'
import { citiesList } from '../locationData/cities'
import {statesList} from "../locationData/states"
import Select from 'react-select'
function Form(props) {

   /*  const [country, setcountry] = useState(""); */
    const [statusDisablestate, setstatusDisablestate] = useState(true);
/*    const [city,setCity]=useState("") */
   const [statusDisablecity,setstatusDisablecity]=useState(true)
    let countries=countryList.map((country)=>{ return   {value:country,label:country}})
let countryOptions=countries

    /* let cities=citiesList[country].map((s)=>{console.log(s)}) */
let states=()=>{  if (props.country()!=""){
    try{
       return statesList[props.country()].map((st)=>{ return {value:st,label:st}})}
        catch(e){
           return [{value:"",label:" "}]
        }
    }
}
let stateOptions=states()
    let cities=()=>{  if (props.state()!=""){
        try{
           return citiesList[props.state()].map((st)=>{ return {value:st,label:st}})}
            catch(e){
               console.log(e);
            }
        }
        else{
        <option value="Select the City"></option>}}
let cityOptions=cities()
let borderChange=(e)=>{

    if (e.target.name==="number"){
        if (e.target.value.length>=6&&e.target.validity.valid&&e.target.value!==""){
            try{
                e.target.classList.remove("wrongInput")
            }catch(e){
        
            }
            e.target.classList.add("greenBorder")   
        }
        else{
            e.target.classList.add("wrongInput")  
        }
    }
if(e.target.value!==""&&e.target.name!="number"){
    try{
        e.target.classList.remove("wrongInput")
    }catch(e){

    }
e.target.classList.add("greenBorder")
}

}
    return (
    <div >
   
    <div >
        <fieldset className='form'>
            <legend >
<h1 className='text-center text-lg py-3'>Regiter for New Buisnness Account</h1>
<h1 className='text-sm text-center'>To Manage Queue in your Shop</h1>
</legend>
<div className='inner-form'>
    <label className='icontext'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
</svg>

Buisness Name</label>
    <input type="text" name="bname" ref={props.bname}  className="form-control" onChange={borderChange} required></input>
    <label>Buisness Type</label>
<input type="text" className="form-control" ref={props.btype} name="btype" onChange={borderChange} ></input>
<label>Owner Name</label>
<input type="text" className="form-control" ref={props.Oname} name="Oname" onChange={borderChange} ></input>
<label>Email Id</label>
<input type="email" className="form-control"  ref={props.email}  name="email" onChange={borderChange} ></input>
<label>Phone Number</label>
<input type="tel" className="form-control" onChange={borderChange}  ref={props.number} pattern="[0-9]*" name="number" ></input>
<label>Address of Shop</label>
<textarea type="text" className='h-3/4 form-control' ref={props.adrs}  name="adrs" onChange={borderChange} ></textarea>

<label>Google Map location link</label>
<input type="url" name="gurl" ref={props.gurl} className="form-control" onChange={borderChange} ></input>
<label>Country</label>
{/* <input list='countries' className="form-control"   onChange={(e)=>{setcountry(e.target.value); setstatusDisablestate(false);borderChange(e)}} name="country"></input> */}

    <Select className='form-control' onChange={(e)=>{props.country(e.value);stateOptions=states();}}  options={countryOptions}/>

<label>State</label>

{/* <input list="states" className="form-control"  ref={props.state} onChange={(e)=>{setCity(e.target.value); setstatusDisablecity(false);borderChange(e)}} name="state" disabled={statusDisablestate}></input> */}
<Select className='form-control' onChange={(e)=>{props.state(e.value);}}  options={stateOptions}/>
<label>City</label>
{/* <input list="cities" className="form-control"  ref={props.city} name="city" disabled={statusDisablecity} onChange={borderChange} ></input> */}
<Select className='form-control' onChange={(e)=>{props.city(e.value)}}  options={cityOptions}/>



</div>
<h1 className='text-sm'>All the fields are mandatory</h1>
<span className='flex my-6 justify-center'>
<button className='btn-secondary w-2/4   ' onClick={()=>{props.add()}}>Register</button>
</span>
</fieldset>
</div>
{/* <div className='  h-screen'><img src={pic} className="w-full h-full "></img></div>
 */}
</div> 
  )
}

export default Form