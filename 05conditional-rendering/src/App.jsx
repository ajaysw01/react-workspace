import { useState } from 'react';
import './App.css';
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  if(!isLoggedIn){
    return(
      <LoginBtn/>
    )
  }

  return (

    // using logical op
    <div>
      <h1>using logical operator</h1>
      <div>
        {isLoggedIn && <LogoutBtn/>}
      </div>
    </div>

    // <div>
    //   {/* using ternery */}
    //   {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
    // </div>
  );
}

export default App;
