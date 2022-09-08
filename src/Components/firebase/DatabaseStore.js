import React from 'react'
import { doc, setDoc , collection, addDoc} from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import app from "./connect"
const dbfirestore=getFirestore(app)




export default dbfirestore