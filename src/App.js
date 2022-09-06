import LandingPage from './LandingPage';
import './index.css';

function App() {
  if (window.location.pathname==="/"){
   
  return (
    <div className='App'>
  <LandingPage/>

  </div>
  );
  }
}

export default App;
