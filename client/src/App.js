import React from 'react';
import logo from './guitar-12793.png';
import './App.css';
//import PostList from './Components/PostList';
//import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/Profile';
//import SignUp from './pages/Signup';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <SignUp></SignUp>


        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Musicology
        </h1>
        
        
      </header> */}
      <Profile></Profile>
    </div>
  );
}

export default App;
