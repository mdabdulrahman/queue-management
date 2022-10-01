import LandingPage from './LandingPage';
import './index.css';
import { useState,useEffect } from 'react';
import {BrowserRouter,Routes,Route, Navigate, useNavigate} from "react-router-dom";
import NewAccount from './NewAccount';
import Success from './Components/Success';
import SignInpg from './SignInpg';
import Admin from './Admin';
import 'animate.css';
import { collection, getDoc,doc, setDoc,query, where } from "firebase/firestore";

import {createUserWithEmailAndPassword,getAuth ,onAuthStateChanged} from "firebase/auth";
import Createps from "./Components/activate/Createps"
import Dashboard from './Components/user/Dashboard';
import { data } from 'autoprefixer';
import dbfirestore from './Components/firebase/DatabaseStore';
import app from './Components/firebase/connect';
function App() {
const auth=getAuth(app)
const [userid, setuserid] = useState(false)
const [userdata, setuserdata] = useState(null)
let getUserData=async(uid)=>{
  const docSnap=await getDoc(doc(dbfirestore,"Users",String(uid)))
 console.log(docSnap)

await localStorage.setItem("userData",JSON.stringify(docSnap.data()))
 

}
useEffect(() => {
getUserData(userid)
try{
setuserdata(JSON.parse(localStorage.getItem("userData")))
console.log(userdata)
}catch(e){

}
}, [userid])

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
     
    getUserData(uid)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

let createUser=async(obj)=>{
    console.log(obj)
   const docSnap=await getDoc(doc(dbfirestore,"AcceptedAccount",obj.aplno))
  if(docSnap.exists()){
    let udata=docSnap.data()
    if (udata.Vcode!=obj.vcode){
        console.log("wrong vcode")
    }
    if (udata.email!=obj.email){
        console.log("wrong email")
    }
    if(udata.vcode==obj.vcode,udata.email==obj.email)
    console.log("f")
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setDoc(doc(dbfirestore, "Users",user.uid),udata); 
setuserid(user.uid)

   /*  window.location.pathname=`user/${user.uid}` */      // ...
    })
    .catch((error) => {
      const errorCode = error.code;

      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });
}
else{
    console.log("wrong apl no");
}
}
return(
 <BrowserRouter>
 <Routes>
  <Route exact path='/' element={<LandingPage/>}/>
  <Route exact path='/NewAccount' element={<NewAccount/>}/>
 <Route exact path='/signin' element={<SignInpg/>}/>
 <Route exact path='/admin' element={<Admin/>}/>
 <Route exact path='/activateaccount' element={<Createps createUser={createUser}/>}/>
 <Route exact path={`/user/:id`} element={<Dashboard name={userid==false?null:userdata.Oname}/>}/>
 </Routes>
 </BrowserRouter>
)
  
}

export default App;
