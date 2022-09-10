import React from 'react'
import Header from './Components/landingPage/Header';
import Reader from './Components/Reader';
import Db from "./Components/firebase/db"
import Success from './Components/Success';
import Fail from "./Components/Fail"
function landingPage() {

  return (
    <div>
        <Header btn=""/>
     <Db></Db>
     <Success info={"Your application will be reviewed in 24 hrs"}/>
   <Fail info={"Unable to regiter your Account"}/>
    </div>
  )
}

export default landingPage