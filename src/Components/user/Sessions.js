import React from 'react'

function Sessions(props) {
  return (
    <div>

        <div>
            <h1>Session {props.i}</h1>
            <h1>Current Position {props.pos}</h1>
            <h1>Total {props.tot}</h1>
        </div>
    </div>
  )
}

export default Sessions