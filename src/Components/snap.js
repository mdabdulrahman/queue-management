import dbfirestore from './firebase/DatabaseStore';
import { doc, onSnapshot,collection,query } from "firebase/firestore";
import react from "react"
import { useEffect } from 'react';
const useAdminfirestore=(ref)=>{
    const unsubscribe = onSnapshot(ref, (snapshot) => {
        // Respond to data
        // ...
        window.localStorage.setItem("data", JSON.stringify(snapshot.docs.map((doc)=>{return doc.data()}).length))
      });
 useEffect(() => {

 const unsub = onSnapshot(
    ref, 
    (snapshot) => {
  
        window.localStorage.setItem("datas", JSON.stringify(snapshot.docs.map((doc)=>{return doc.data()})))

},
    (error) => {
      // ...
    });

     
 },[JSON.parse(localStorage.getItem("data"))])
 return (JSON.parse(localStorage.getItem("datas"))===null?[{}]:JSON.parse(localStorage.getItem("datas")))
}
    export default useAdminfirestore
