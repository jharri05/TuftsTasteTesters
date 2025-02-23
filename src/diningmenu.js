import React from "react";
import { Link } from 'react-router-dom';
import "./diningmenu.css";
import jumbo from "./images/jumbo.jpg"

function DiningMenus(){
    return(
    
      <div>
          
        <section className="menu_body">
          {/* /* <div className="overlay"></div> */ }
            <div className = "menu_info">
              <h1>Menu and Reviews</h1>
              <h3>Click on a dinning hall to see its menu 
                  and a review from other Tufts students
              </h3>
                <div className="dining-box dewick">
                  <h2>Dewick-Macphie</h2>
                </div>

                <div className="dining-box carmichael">
                  <h2>Carmicheal</h2> 
                </div>
              
            
            </div>

            <div className="overlay_jumbo_container">
              <div className = "overlay_jumbo"></div>
              <img className = "jumbo" src= {jumbo}/>
            </div>
      
        </section>
        
        
      </div>
      
       

      
  
    );
  }

export default DiningMenus;