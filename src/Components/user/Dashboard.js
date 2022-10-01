import React from 'react'

function Dashboard(props) {
  console.log(props.name)
  return (
    <div>Hello ,{props.name}</div>
  )
}

export default Dashboard