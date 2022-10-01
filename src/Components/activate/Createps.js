import React,{useState} from 'react'
import Header from '../Header'
function Createps(props) {
    const [State, setState] = useState({email:"",password:"",vcode:"",aplno:""})
  return (
    <div>
        <Header btn="signIn"/>
        <fieldset className='form-sign'>
        <label className='flex gap-2 items-center'>

Application No </label>
<input type="tel" className='form-control' onChange={(e)=>setState({...State,aplno:e.target.value})}  name="aplno"></input>
   <label className='flex gap-2 items-center'>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
</svg>

     Email</label>
   <input type="email" className='form-control' onChange={(e)=>{setState({...State,email:e.target.value})}} name="email"></input>
<label className='flex gap-2 items-center'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
</svg>
Create Password</label>
<input type="password" className='form-control' onChange={(e)=>{setState({...State,password:e.target.value})}} name="password"></input>
<label className='flex gap-2 items-center'>

Confirm Password</label>
<input type="password" className='form-control'  name="cpassword"></input>
<label className='flex gap-2 items-center'>

Verification Code </label>
<input type="tel" className='form-control' onChange={(e)=>{setState({...State,vcode:e.target.value})}} name="vcode"></input>
<button className='btn-secondary m-2 ' onClick={()=>props.createUser(State)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
Done</button>


</fieldset>


    </div>
  )
}

export default Createps