import React,{useState,useEffect} from 'react'
import dbfirestore from '../firebase/DatabaseStore'
import { collection,getDoc,doc } from 'firebase/firestore'
import useAdminfirestore from '../snap'
import { getDatabase, ref, onValue,set,update, get} from "firebase/database";
import db from "../firebase/db"
import Header from '../Header';
import { data } from 'autoprefixer';
import Sessions from './Sessions';
import Sidebar from './Sidebar';
import Reader from './Reader';
import { useRef } from 'react';

function Dashboard(props) {
  console.log(props.uid)
const [datas, setdatas] = useState(null)
const [sessionId,setsessionId]=useState("")
const [sessions,setsessions]=useState("")
const sessionName=useRef()
const [currentView,setcurrentView]=useState("home")

let scan=(id)=>{
  setcurrentView("scan");
  setsessionId(id)
  console.log(id)
}

let addCust=(id)=>{
  console.log(sessionId)

 console.log(datas.session.cq[sessionId])
  update(ref(db,'users/'+props.uid+'/session/cq/'+sessionId+'/cust'),
  {[datas.session.cq[sessionId].perTot+1]:id}
  ).then(
    ()=>
    {
      update(ref(db,'queues/shopsq/'+sessionId),

      {tot:datas.session.cq[sessionId].tot+1}
      )
      update(ref(db,'queues/shopsq/'+sessionId+"/cust"),

      {[datas.session.cq[sessionId].perTot+1]:id}
      )

    }
  )
  update(ref(db,'users/'+props.uid+'/session/cq/'+sessionId),{tot:datas.session.cq[sessionId].tot+1,perTot:datas.session.cq[sessionId].perTot+1}).then(()=>{
 update(ref(db,"tempcust/"+id),
 {
  pos:datas.session.cq[sessionId].perTot+1,
  read:true,
  shopSessionId:sessionId,

 }
 ) }
  )
  alert("Customer Added Sucessfully")
setcurrentView("home")

}



useEffect(()=>{
  const refr = ref(db, 'users/'+props.uid);
  onValue(refr, (snapshot) => {
    const data = snapshot.val();
setdatas(data);
 if(data.session!=undefined)
{try{
  setsessions(
    Object.keys(data.session.cq).map((r,i)=>{
      return(<Sessions uid={props.uid} data={data} id={r} i={i+1} pos={data.session.cq[r].status} ssName={data.session.cq[r].ssName} message={data.session.cq[r].message}  scan={(id)=>scan(id)} tot={data.session.cq[r].tot}/>)
    }
    )

  )
}
catch(e){
  console.log(e)
}
}
console.log(Object.keys(data.session.cq))
  });},[props.uid])







let newSession=()=>{
  console.log(datas.session)
  if(datas.session==undefined){
    let temp="cvddgdfggdgdf"+props.uid
update(ref(db,'users/'+props.uid+'/session'),
{
  cq:{
  [temp]:{
    "name":datas.bname,
    "cust":{
      0:"fgfhfdf"
    }
    ,
    "status":0,
    ssName:sessionName.current.value,
    tot:0,
    perTot:0,
    message:"wait"
  }
},
ps:
{
  0:"k"
},
status:false
}

).then(()=>{

    update(ref(db,'queues/shopsq'),{[temp]:{
      "name":datas.bname,
      "cust":{
        0:"fgfhfdf"
      },
      ssName:sessionName.current.value,
      "status":0,
      tot:0,
      message:"wait"
    }}).then(()=>
    sessionName.current.value="")


})
  }
else{
  let temp=props.uid+Math.round(Math.random()*10000)
update(ref(db,'users/'+props.uid+"/session/cq"),
{
  [temp]:{
    cust:["fgfgfgsdfggdfg"],
    name:datas.bname,
    ssName:sessionName.current.value,
    status:0,
    perTot:0,
    tot:0,
    message:"wait"
  }
}
).then(()=>{

  update(ref(db,'queues/shopsq'),{[temp]:{
    "name":datas.bname,
    "status":0,
    "cust":{
      0:"fgfhfdf"
    },
    ssName:sessionName.current.value,
    tot:0,
    message:"wait"
  }}).then(()=>sessionName.current.value="")
  


})


}
}
  return (
    <div>
      <Header btn={"signOut"}/>
   {currentView==="home"?
      <div className='ml-8'>
      <h1>Hello {datas!=null?datas.Oname:"loading............"} </h1>
      <input type="text" className='form-control form lg:w-2/4' ref={sessionName} placeholder='Session name'></input>
    <button className='bg-blue-500 p-2 lg:ml-6 text-white' onClick={()=>newSession()}>New Session</button>
    {sessions}

      </div>:currentView==="scan"?<Reader finish={(id)=>addCust(id)}/>:null
}
      </div>
  )
}

export default Dashboard
