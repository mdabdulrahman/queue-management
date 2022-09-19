import React, { Component } from 'react'

import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/connect';
export default class SignIn extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email:"",
         password:""
      }
    }
   
  

  render() {
    return (
      <div>
        <fieldset className='form-sign'>
   
            <label className='flex gap-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
</svg>

              Email</label>
            <input type="email" className='form-control' onChange={(e)=>{this.setState({email:e.target.value})}} name="email"></input>
        <label className='flex gap-2 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
</svg>
Password</label>
        <input type="password" className='form-control' onChange={(e)=>{this.setState({password:e.target.value})}} name="password"></input>
        <button className='btn-secondary m-2 ' onClick={()=>this.props.signin(this.state.email,this.state.password)}>Sign In</button>
       <span className='col-span-2 text-sm text-center'>Don't have account ? <a href="/NewAccount">Register Now</a></span>
       <span className=' text-sm flex justify-center items-center gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>
Forgot Password </span>
        </fieldset>
       
      </div>

    )
  }
}
