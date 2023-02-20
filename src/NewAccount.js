import React from 'react'
import Header from './Components/Header'
import Menu from './Components/Menu'
import Newform from './Components/NewAccount/Newform'

function NewAccount() {
  return (
    <div>
        <Header btn="signIn">
          <Menu/>
          </Header>
        <Newform/>
    </div>
  )
}

export default NewAccount