import React,{useEffect,useState} from 'react'
import Header from './Components/Header'
import SignIn from './Components/signIn/SignIn'
import app from "./Components/firebase/connect"
import {  onAuthStateChanged,getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Success from './Components/Success';
import Fail from './Components/Fail';
import Menu from './Components/Menu';

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
const [signStatus, setsignStatus] = useState(null)
 useEffect(() => {
  if(props.signStatus==null){

  }
   else if(props.signStatus){
    setsignStatus(<Success info={"Successfull 👍!"}/>)
   }
 else if(!props.signStatus){
  console.log("helo")
  setsignStatus(<Fail info={"Email id Or Password is Wrong , Try Again !!"}/>)
 }
 

 }, [props.signStatus])
 
  return (
    <div>
      <Header btn="create">
        <Menu/>
      </Header>
        <SignIn signin={props.signIn} signStatus={props.signStatus}>
        
        </SignIn>

    </div>
  )
}

export default SignInpg