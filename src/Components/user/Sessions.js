import React from 'react'

function Sessions(props) {
  return (
    <div>

        <div className='border-2 w-3/4'>
            <h1>Session {props.i}</h1>
            <h1>Current Position {props.pos}</h1>
            <h1>Total {props.tot}</h1>
            <button onClick={()=>props.scan(props.r)} className='bg-green-500 px-2 py-1 text-white'>Join a Customer</button>
        </div>
    </div>
  )
}

export default Sessions