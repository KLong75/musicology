import React from 'react';
import logo from './guitar-12793.png';
import './App.css';
import PostList from './Components/PostList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          U, Me, and the Kevins
        </p>
        
          <p>Let's Rock</p>
        
      </header> */}
      <PostList/>
    </div>
  );
}

export default App;
