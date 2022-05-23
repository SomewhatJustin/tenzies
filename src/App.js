import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// <img src={logo} className="App-logo" alt="logo" />

function App() {
  return (
    <div className="App">
      <h1>Tenzies</h1>
      <p>Roll the dice a bunch of times!</p>
      <Dice />
    </div>
  );
}

export default App;
