import React from 'react'

function Newform() {
  return (
    <div >
        <div>
            <fieldset className='form'>
                <legend >
<h1 className='text-center text-lg py-3'>Regiter for New Buisnness Account</h1>
    <h1 className='text-sm text-center'>To Manage Queue in your Shop</h1>
    </legend>

        <label>Buisness Name : </label>
        <input type="text" name="bname" required></input>
   <label>Owner Name :</label>
   <input type="text" name="Oname"></input>
   <label>Email Id :</label>
   <input type="email" name="email"></input>
   <label>Phone Number :</label>
   <input type="text" name="number"></input>
   <label>Address of Shop</label>
   
    
    </fieldset>
    </div>
    </div>
  )
}

export default Newform