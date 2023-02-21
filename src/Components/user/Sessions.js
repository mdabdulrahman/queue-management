import React,{useEffect,useState} from 'react'
import { getDatabase, ref, onValue,set,update, get} from "firebase/database";
import db from "../firebase/db"
function Sessions(props) {

const [cust,setcust]=useState()

  let nextPerson=(id)=>
  {
console.log("next person")
let st=props.data.session.cq[id].status+1;
  update(ref(db,'queues/shopsq/'+id),{status:props.data.session.cq[id].status+1,tot:props.data.session.cq[id].tot-1}).then((r)=>console.log(r)).catch((e)=>console.log(e))
  update(ref(db,'users/'+props.uid+"/session/cq/"+id),{status:props.data.session.cq[id].status+1,tot:props.data.session.cq[id].tot-1})
/*   update(ref(db,'queues/shopsq/'+id+'/cust'),{[st]:null}) */

  console.log(cust)
  let s=cust[1]
  console.log(s)
   update(ref(db,'queues/shopsq/'+id+'/cust'),{[s]:null})

  console.log("mm")

}
useEffect(() => {
  onValue(ref(db,'queues/shopsq/'+props.id),(snapshot)=>
  {

setcust(Object.keys(snapshot.val().cust))
  } )


}, [props.id])

  return (
    <div>

        <div className='border-2 mt-4 w-3/4 p-2  rounded-md'>
            <h1 className='font-bold text-lg text-center'>Session {props.i}</h1>
            <h1 className='font-semibold py-2'>Total Finished : {props.pos}</h1>
            <h1 className='font-semibold py-2'>Total Members : {props.tot}</h1>
            <button onClick={()=>props.scan(props.id)} className='bg-green-500 rounded-sm my-2 mx-2 px-2 py-1 text-white'>Join a Customer</button>
       <button onClick={()=>nextPerson(props.id)} className='bg-orange-500 mx-2 rounded-sm px-2 py-1 text-white'>Next Person</button>
        </div>
    </div>
  )
}

export default Sessions
