import LandingPage from './LandingPage';
import './index.css';
import { useState,useEffect } from 'react';
import {BrowserRouter,Routes,Route, Navigate, useNavigate} from "react-router-dom";
import NewAccount from './NewAccount';
import Success from './Components/Success';
import SignInpg from './SignInpg';
import Admin from './Admin';
import 'animate.css';
import {  onAuthStateChanged,getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDoc,doc, setDoc,query, where } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
import {createUserWithEmailAndPassword} from "firebase/auth";
import Createps from "./Components/activate/Createps"
import Dashboard from './Components/user/Dashboard';
import { data } from 'autoprefixer';
import dbfirestore from './Components/firebase/DatabaseStore';
import app from './Components/firebase/connect';
import useAdminfirestore from './Components/snap';
import Create from './Components/cust/Create';
import Reader from './Components/user/Reader';
function App() {
  /* Auth for Sign in  */
const auth=getAuth(app)
/* db firestore realtime database */
const db = getDatabase(app);
const [userid, setuserid] = useState(false)
const [signStatus, setsignStatus] = useState(null)
onAuthStateChanged(auth, (user) => {
    if (user) {
      //User sign in
      const uid=user.uid
 setuserid(uid)
    } 
    else {
//User sign out
setuserid(false)
    }
  });
  //Create User after verification
let createUser=async(obj)=>{
    console.log(obj)
   const docSnap=await getDoc(doc(dbfirestore,"AcceptedAccount",obj.aplno))
  if(docSnap.exists()){
    let udata=docSnap.data()
    if (udata.vcode!=obj.vcode){
        alert("Wrong Vcode")
    }
    if (udata.email!=obj.email){
     alert("Wrong Email ID")
     window.location.reload()
    }
    if(udata.vcode==obj.vcode,udata.email==obj.email)
    console.log("User datas verified")
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
 
   ;
  

set(ref(db, 'users/' + user.uid),udata).then(()=>{setTimeout(()=>{window.location.pathname=`user`;setuserid(user.uid)},10000);}).catch(e=>alert(e))
         // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      alert(errorMessage)
      // ..
    });
}
else{
alert("Wrong Application Number")
}
}
useEffect(() => {
  
  if(userid!=false&&window.location.pathname!=`/user`&&window.location.pathname!='/user/joincust'&&window.location.pathname!="/admin"){
    window.location.pathname=`user`
  }
}, [userid])
let signIn=(email,password)=>{
  console.log("signin")
  return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  // Signed in 
  const user = userCredential.user;

    setsignStatus(true)

    if(user.uid=="oxT7SbBZzxQqIlAfpFODYAJnWKn2"){
      window.location.pathname="/admin"
    }
    else{
    window.location.pathname=`user`
    }
return true
  // ...
  })
  .catch((error) => {
    setsignStatus(false)
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(error)

  return false
  })

}
return(
 <BrowserRouter>
 <Routes>
  <Route exact path='/' element={<LandingPage/>}/>
  <Route exact path='/NewAccount' element={<NewAccount/>}/>
 <Route exact path='/signin' element={<SignInpg signIn={signIn} signStatus={signStatus}/>}/>
 <Route exact path='/admin' element={<Admin uid={userid}/>}/>
 <Route exact path='/activateaccount' element={<Createps createUser={createUser}/>}/>
 <Route exact path={`/user`} element={<Dashboard uid={userid} auth={auth}/>}/>
 <Route exact path='/join' element={<Create/>}/>
 <Route exact path='/user/joincust' element={<Reader/>}/>
 </Routes>
 </BrowserRouter>
)
  
}

export default App;
