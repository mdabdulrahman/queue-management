import React from 'react'
import cross from "./cross.png"
function Fail(props) {
  return (
    <div className='fail'>
        <div className='flex justify-center'>  <img className='w-12' src={cross}></img></div>  
        {props.info}
    <button className='fail-btn' onClick={()=>{window.location.reload()}}>Try Again</button>
    </div>
  )
}

export default Fail