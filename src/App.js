import LandingPage from './LandingPage';
import './index.css';
import NewAccount from './NewAccount';

function App() {
  let page;
  if (window.location.pathname==="/"){
    page=<LandingPage/>
  }
  else if(window.location.pathname==="/NewAccount"){
    page=<NewAccount/>
  }
  return (
    <div className='App'>
  {page}
  </div>
  );
  
}

export default App;
