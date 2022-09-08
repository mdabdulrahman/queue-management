import React from 'react'
import pic from "./ni.jpg"
function Newform() {
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
        <input type="text" name="bname"  className='form-control' required></input>
        <label>Buisness Type :</label>
    <input type="text" className='form-control' name="btype"></input>
   <label>Owner Name :</label>
   <input type="text" className='form-control' name="Oname"></input>
   <label>Email Id :</label>
   <input type="email" className='form-control' name="email"></input>
   <label>Phone Number :</label>
   <input type="text" className='form-control' name="number"></input>
   <label>Address of Shop :</label>
   <textarea type="text" className='h-3/4 form-control' name="adrs"></textarea>
   
   <label>Google Map location link : </label>
   <input type="url" name="gurl" className='form-control '></input>
    <label>Country :</label>
    <input type="text" className='form-control' name="country"></input>
    <label>State :</label>
    <input type="text" className='form-control' name="state"></input>
    <label>District :</label>
    <input type="text" className='form-control' name="district"></input>
    <button className='btn-secondary '>Register</button>
    </div>
    </fieldset>
    </div>
    {/* <div className='  h-screen'><img src={pic} className="w-full h-full "></img></div>
     */}
</div>  )
}

export default Newform