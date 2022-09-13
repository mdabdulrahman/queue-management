import React from 'react'
import Header from './Components/Header'
import Newform from './Components/NewAccount/Newform'

function NewAccount() {
  return (
    <div>
        <Header btn="signIn"/>
        <Newform/>
    </div>
  )
}

export default NewAccount