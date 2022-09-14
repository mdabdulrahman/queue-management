import { getDatabase,ref,set,onValue,child,get,update,push } from "firebase/database";
import app from "./connect"
import React from 'react'

const db=getDatabase(app)
export default db