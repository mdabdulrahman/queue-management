import React from 'react'
import Header from './Components/Header';

import Success from './Components/Success';
import Fail from "./Components/Fail"
import Intro from './Components/landingPage/Intro';
import Menu from './Components/Menu';
function landingPage() {
return (
    <div>
        <Header btn="">
          <Menu/>
        </Header>
        

       <Intro/>
    
    </div>
  )
}

export default landingPage