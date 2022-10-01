import React from 'react'
import Header from './Components/Header'
import SignIn from './Components/signIn/SignIn'
import app from "./Components/firebase/connect"
import {  onAuthStateChanged,getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function SignInpg(props) {
  const auth=getAuth(app)
  const navigate=useNavigate()
/*   onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user)
      if (user.uid==="oxT7SbBZzxQqIlAfpFODYAJnWKn2"){
        navigate("/admin")
        }
        else{
          navigate(`../user/${uid}`)
        }
      // ...
    } else {
      // User is signed out
      // ...
    }
  }); */
 
  return (
    <div>
      <Header btn="create"/>
        <SignIn signin={props.signIn}/>
    </div>
  )
}

export default SignInpg