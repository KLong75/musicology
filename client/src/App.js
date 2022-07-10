import React from "react";
import logo from "./guitar-12793.png";
import "./App.css";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>U, Me, and the Kevins</p>
        <Profile />
        <p>Let's Rock</p>
      </header>
    </div>
  );
}

export default App;
