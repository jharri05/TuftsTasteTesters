import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Welcome from './welcome';
import Dewick from './Dewick';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dewick">Dewick</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dewick" element={<Dewick />} />
        </Routes>
    </Router>
  );
}

export default App;
