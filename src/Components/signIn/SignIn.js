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
        <fieldset className='form'>
            <legend>Sign In</legend>
            <label>Email</label>
            <input type="email" className='form-control' onChange={(e)=>{this.setState({email:e.target.value})}} name="email"></input>
        <label>Password</label>
        <input type="password" className='form-control' onChange={(e)=>{this.setState({password:e.target.value})}} name="password"></input>
        <button className='btn-secondary m-2' onClick={()=>this.props.signin(this.state.email,this.state.password)}>Sign In</button>
        </fieldset>
       
      </div>

    )
  }
}
