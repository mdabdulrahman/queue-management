import LandingPage from './LandingPage';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NewAccount from './NewAccount';
import Success from './Components/Success';

function App() {
return(
 <BrowserRouter>
 <Routes>
  <Route exact path='/' element={<LandingPage/>}/>
  <Route exact path='/NewAccount' element={<NewAccount/>}/>
 
 </Routes>
 </BrowserRouter>
)
  
}

export default App;
