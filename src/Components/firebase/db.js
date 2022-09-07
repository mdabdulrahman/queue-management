import { getDatabase,ref,set,onValue,child,get,update,push } from "firebase/database";
import app from "./connect"
import React from 'react'

const database=getDatabase(app)

function db() {
    console.log(database)
   
  return (
    <div></div>
  )
}

export default db