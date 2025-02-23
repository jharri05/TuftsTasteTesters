import logo from './logo.svg';
import React from 'react';
import './App.css';
import Welcome from "./welcome"
import Rating from './Rating'; 

function App() {
  return (
    <div className="App">
      <Welcome />
      <h1>Product Rating</h1>
      <Rating /> {/* Use the Rating component here */}
    </div> 
  ); 
}

export default App;
