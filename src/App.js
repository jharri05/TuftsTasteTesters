import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Welcome from './welcome';
import Dewick from './Dewick';
import Menu from './diningmenu';

function App() {
  return (
    <Router>
      <div >
        <nav>
          <ul>
            <li><Link to="/" className='nav-link'>Home</Link></li>
            <li><Link to="/dewick" className='nav-link'>Dewick</Link></li>
            <li><Link to="/diningmenu" className='nav-link'>Menu</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Dewick" element={<Dewick />} />
          <Route path="/diningmenu" element={<Menu />}/>
        </Routes>
    </Router>
  );
}

export default App;
