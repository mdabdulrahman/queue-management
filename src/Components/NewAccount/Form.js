import React,{useState} from 'react'
import { countryList } from '../Countrylist'
import { citiesList } from '../cities'
import {statesList} from "../states"
function Form(props) {
    const [country, setcountry] = useState("");
    const [statusDisablestate, setstatusDisablestate] = useState(true);
   const [city,setCity]=useState("")
   const [statusDisablecity,setstatusDisablecity]=useState(true)
    let countries=countryList.map((country)=>{ return <option value={country}></option>})

    /* let cities=citiesList[country].map((s)=>{console.log(s)}) */
let states=()=>{  if (country!=""){
    try{
       return statesList[country].map((st)=>{ return <option value={st}></option>})}
        catch(e){
           
        }
    }
    else{
    <option value="Select the Country"></option>}}

    let cities=()=>{  if (city!=""){
        try{
           return citiesList[city].map((st)=>{ return <option value={st}></option>})}
            catch(e){
               
            }
        }
        else{
        <option value="Select the City"></option>}}


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
    <input type="text" name="bname" ref={props.bname}  className='form-control' required></input>
    <label>Buisness Type :</label>
<input type="text" className='form-control' ref={props.btype} name="btype"></input>
<label>Owner Name :</label>
<input type="text" className='form-control' ref={props.Oname} name="Oname"></input>
<label>Email Id :</label>
<input type="email" className='form-control' ref={props.email}  name="email"></input>
<label>Phone Number :</label>
<input type="tel" className='form-control'  ref={props.number} pattern="[0-9]*" name="number"></input>
<label>Address of Shop :</label>
<textarea type="text" className='h-3/4 form-control' ref={props.adrs}  name="adrs"></textarea>

<label>Google Map location link : </label>
<input type="url" name="gurl" ref={props.gurl} className='form-control '></input>
<label>Country :</label>
<input list='countries' className='form-control' ref={props.country} onChange={(e)=>{setcountry(e.target.value); setstatusDisablestate(false)}} name="country"></input>
<datalist id='countries' >
    {countries}
</datalist>
<label>State :</label>

<input list="states" className='form-control' ref={props.state} onChange={(e)=>{setCity(e.target.value); setstatusDisablecity(false)}} name="state" disabled={statusDisablestate}></input>
<datalist id='states'>
{states()}
</datalist>
<label>City :</label>
<input list="cities" className='form-control' ref={props.city} name="city" disabled={statusDisablecity}></input>
<datalist id='cities'>
{cities()}
</datalist>
<button className='btn-secondary ' onClick={()=>{props.add()}}>Register</button>
</div>
</fieldset>
</div>
{/* <div className='  h-screen'><img src={pic} className="w-full h-full "></img></div>
 */}
</div> 
  )
}

export default Form