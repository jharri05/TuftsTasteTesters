import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Welcome from './welcome';
import Dewick from './Dewick';
import Menu from './diningmenu';
// import elephantCursor from './images/jumbo-cursor.png'; 

function App() {
    const [openMenu, setOpenMenu] = useState(null); 

    const handleMenuClick = (menu) => { 
      setOpenMenu(prevMenu => (prevMenu === menu ? null : menu));
    };
  
    return (
      <Router>
          <nav>
            <ul>
              <li><Link to="/" className='nav-link'>Home</Link></li>   
              <li><Link to="/diningmenu" className='nav-link'>Menu</Link></li>
            </ul>
          </nav>
      
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/diningmenu" element={
              <Menu 
               openMenu = {openMenu}
               handleMenuClick={handleMenuClick}
            />
            } />            
          </Routes>
          <footer>                 
            <span>&copy; Jumbocode 2025</span>
          </footer>
      </Router>
    
  );
}

export default App;
