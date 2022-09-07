import React from 'react'
import Header from './Components/landingPage/Header';
import Reader from './Components/Reader';
import Db from "./Components/firebase/db"
function landingPage() {

  return (
    <div>
        <Header btn=""/>
     <Db></Db>
    </div>
  )
}

export default landingPage