import React, { Component } from 'react'
import loader from "../group.png"
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/connect';
export default class SignIn extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email:"",
         password:"",
         loader:<h1>Sign In</h1>,
         border:"",
         msg:""
      }
    }
   
  signIn(){
    this.props.signin(this.state.email,this.state.password).then(
      (value)=>value?this.setState({border:"greenBorder",loader:"Success"}):this.setState({border:"wrongInput",msg:<h1 className='text-red-500 col-span-2 flex gap-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>
    Invalid Email id or Password</h1>,loader:"Sign In"}));
    this.setState({loader:<><div className='h-6 w-6 rounded-full border-t-4 bg-zinc-500 animate-spin'></div><h1 className='animate-pulse'>Loading...</h1></>})
  }

  render() {
    return (
      <div>
        {this.props.children}
        <fieldset className='form-sign'>
   
            <label className='flex gap-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
</svg>

              Email</label>
            <input type="email" className={'form-control '+this.state.border} onChange={(e)=>{this.setState({email:e.target.value,msg:"",border:""})}} name="email"></input>
        <label className='flex gap-2 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
</svg>
Password</label>
        <input type="password" className={'form-control '+this.state.border} onChange={(e)=>{this.setState({password:e.target.value,msg:"",border:""})}} name="password"></input>
       {this.state.msg}
        <button className='btn-secondary m-2 ' onClick={()=>this.signIn()}>

{this.state.loader}
</button>
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
