import LandingPage from './LandingPage';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NewAccount from './NewAccount';
import Success from './Components/Success';
import SignInpg from './SignInpg';
import Admin from './Admin';
import 'animate.css';
function App() {
return(
 <BrowserRouter>
 <Routes>
  <Route exact path='/' element={<LandingPage/>}/>
  <Route exact path='/NewAccount' element={<NewAccount/>}/>
 <Route exact path='/signin' element={<SignInpg/>}/>
 <Route exact path='/admin' element={<Admin/>}/>
 </Routes>
 </BrowserRouter>
)
  
}

export default App;
