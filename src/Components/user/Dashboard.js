import React,{useState,useEffect} from 'react'
import dbfirestore from '../firebase/DatabaseStore'
import { collection,getDoc,doc } from 'firebase/firestore'
import useAdminfirestore from '../snap'
import { getDatabase, ref, onValue} from "firebase/database";
import db from "../firebase/db"
import Header from '../Header';
import { data } from 'autoprefixer';
import Sidebar from './Sidebar';

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
      <Sidebar/>
      <div className='ml-24'>
      <h1>Hello {datas!=null?datas.Oname:"loading............"} </h1>
      </div>
      </div>
  )
}

export default Dashboard