import React from 'react'
import { getDatabase, ref, onValue,set,update, get} from "firebase/database";
import db from "../firebase/db"
function Sessions(props) {
  let nextPerson=(id)=>
  {
console.log("next person")
  update(ref(db,'queues/shopsq/'+id),{status:props.data.session.cq[id].status+1,tot:props.data.session.cq[id].tot-1}).then((r)=>console.log(r)).catch((e)=>console.log(e))
  update(ref(db,'users/'+props.uid+"/session/cq/"+id),{status:props.data.session.cq[id].status+1,tot:props.data.session.cq[id].tot-1})
   console.log("mm") 
    
}
  return (
    <div>

        <div className='border-2 w-3/4'>
            <h1>Session {props.i}</h1>
            <h1>Current Position {props.pos}</h1>
            <h1>Total {props.tot}</h1>
            <button onClick={()=>props.scan(props.id)} className='bg-green-500 px-2 py-1 text-white'>Join a Customer</button>
       <button onClick={()=>nextPerson(props.id)} className='bg-orange-500 px-2 py-1 text-white'>Next Person</button>
        </div>
    </div>
  )
}

export default Sessions