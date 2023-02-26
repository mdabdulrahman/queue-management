import React,{useEffect,useState,useRef} from 'react'
import { getDatabase, ref, onValue,set,update, get} from "firebase/database";
import db from "../firebase/db"
function Sessions(props) {

const [cust,setcust]=useState(["","Loading.."])
const [firstCust,setfirstCust]=useState(["","Loading.."])
const message=useRef()

let updateMessage=()=>{
  update(ref(db,'users/'+props.uid+'/session/cq/'+props.id),{message:message.current.value}).then(
    ()=>{
      update(ref(db,'queues/shopsq/'+props.id),{message:message.current.value}).then(()=>message.current.value="")
    }
  )

}


let deleteSession=(id)=>{

  console.log("deleting this session",id)
  //updating in history
  update(ref(db,'users/'+props.uid+'/session/ps'),{[id]:{
    tot:props.pos
  }})
//deleting 
update(ref(db,'users/'+props.uid+'/session/cq'),{[props.id]:null})
  
  }

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
setfirstCust(Object.values(snapshot.val().cust))
setcust(Object.keys(snapshot.val().cust))
  } )


}, [props.id])

  return (
    <div>

        <div className='border-2 mt-4 w-3/4 p-2  rounded-md'>
            <h1 className='font-bold text-lg text-center'> {props.ssName}</h1>
            <h1 className='font-semibold py-2'>Total Finished : {props.pos}</h1>
            <h1 className='font-semibold py-2'>Total Members : {props.tot}</h1>
            <h1 className='font-semibold py-2'>First Person Id : {cust.length>=2?firstCust[1].slice(-4):"No persons"}</h1>
         <h1 className='font-semibold py-2'>Current Message : {props.message}</h1>
           <div>
            <input type="text" className='form-control form' ref={message} placeholder='Enter the message'></input>
            <button onClick={()=>updateMessage()} className='bg-green-500 rounded-sm my-2 mx-2 px-2 py-1 text-white'>Add a Message</button>
           </div>
            <button onClick={()=>props.scan(props.id)} className='bg-green-500 rounded-sm my-2 mx-2 px-2 py-1 text-white'>Join a Customer</button>
       <button onClick={()=>nextPerson(props.id)} className='bg-orange-500 mx-2 rounded-sm px-2 py-1 text-white'>Next Person</button>
       {
       props.tot==0?<button onClick={()=>deleteSession(props.id)} className='bg-red-500 mx-2 rounded-sm px-2 py-1 text-white'>Delete</button>:null
       
      }
        </div>
    </div>
  )
}

export default Sessions
