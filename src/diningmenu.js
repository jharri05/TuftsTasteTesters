import React from "react";
import { Link } from 'react-router-dom';
import "./diningmenu.css";

function DiningMenus(){
    return(
    
      <div>
        <head>
          <h1>Welcome to the Dining Menus Page</h1>
        </head>
        <div className="background-image">
          <div className="dining-containers">
            <div className="dining-box dewick">
              <h2>Dewick-Macphie</h2>
            </div>
            <div className="dining-box carmichael">
              <h2>Carmicheal</h2>
            </div>
          </div>
        </div>
      </div>
      
     

      
  
    );
  }

export default DiningMenus;