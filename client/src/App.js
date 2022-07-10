import React from 'react';
import logo from './guitar-12793.png';
import './App.css';

import SignUp from './Components/Sign-up';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignUp></SignUp>


        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Musicology
        </h1>
        
        
      </header>
    </div>
  );
}

export default App;
