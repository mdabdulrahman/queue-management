import React from 'react'
import Header from './Components/Header'
import SignIn from './Components/signIn/SignIn'
import app from "./Components/firebase/connect"
import {  onAuthStateChanged,getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function SignInpg() {
  const auth=getAuth(app)
  const navigate=useNavigate()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user)
      if (user.uid==="oxT7SbBZzxQqIlAfpFODYAJnWKn2"){
        navigate("/admin")
        }
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  let signin=(email,password)=>{
    console.log(email)
    signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
if (user.uid==="oxT7SbBZzxQqIlAfpFODYAJnWKn2"){
navigate("/admin")
}
// ...
})
.catch((error) => {
const errorCode = error.code;
const errorMessage = error.message;
console.log(error)
});}
  return (
    <div>
      <Header btn="create"/>
        <SignIn signin={signin}/>
    </div>
  )
}

export default SignInpg