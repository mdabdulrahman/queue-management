import dbfirestore from './firebase/DatabaseStore';
import { doc, onSnapshot,collection } from "firebase/firestore";
import react from "react"
import { useState } from 'react';
const useAdminfirestore=()=>{
    const [r, setr] = useState([])
const unsub = onSnapshot(
    collection(dbfirestore, "NewAccount"), 
    (snapshot) => {
        unsub()
  
    if(r!=[]){
       
setr(snapshot.docs.map((doc)=>{return doc.data()}))
    }
unsub()
},
    (error) => {
      // ...
    });


   

return r
}
    export default useAdminfirestore