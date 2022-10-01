import React,{useState,useEffect} from 'react'
import dbfirestore from '../firebase/DatabaseStore'
import { collection,getDoc,doc } from 'firebase/firestore'
import useAdminfirestore from '../snap'
import { getDatabase, ref, onValue} from "firebase/database";
import db from "../firebase/db"
import Header from '../Header';
import { data } from 'autoprefixer';

function Dashboard(props) {
  console.log(props.uid)
const [datas, setdatas] = useState(null)
useEffect(()=>{
  const refr = ref(db, 'users/'+props.uid);
  onValue(refr, (snapshot) => {
    const data = snapshot.val();
setdatas(data);
console.log(data)
  });},[props.uid])
  return (
    <div>
      <Header btn={"signOut"}/>
      Hello {datas!=null?datas.Oname:"loading............"} ,</div>
  )
}

export default Dashboard