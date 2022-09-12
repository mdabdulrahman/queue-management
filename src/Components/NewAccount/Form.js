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
    console.log(e)
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
    <label >Buisness Name</label>
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