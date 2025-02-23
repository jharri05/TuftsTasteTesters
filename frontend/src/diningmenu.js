import React from "react";
import { Link } from 'react-router-dom';
import "./diningmenu.css";
import jumbo from "./images/jumbo.jpg"
import Dewick from "./Dewick"

const DiningMenus = ({openMenu, handleMenuClick}) => {
    return(
      <div> 
        <section className="menu_body">
            <div className = "menu_info">
              <h1>Menu and Reviews</h1>
              <h3>Click on a dinning hall to see its menu 
                  and a review from other Tufts students
              </h3>
                <div className="dining-box clickable" onClick={() => handleMenuClick ('dewick')}>
                  <h2>Dewick-Macphie</h2>
                </div>

                {openMenu === 'dewick' && (
                <>
                  <Dewick className = "hidden_menu_dewick"/>
                  {/* <div className = "hidden_menu_dewick">Meal 1</div>
                  <div className = "hidden_menu_dewick">Meal 2</div>
                  <div className = "hidden_menu_dewick">Meal 3</div> */}
                </>
                )}

                <div className="dining-box clickable" onClick={() => handleMenuClick ('carm')}>
                  <h2>Carmicheal</h2> 
                </div>

                {openMenu === 'carm' && (
                <>
                  {/* <div className = "hidden_menu_carm">Meal 1</div>
                  <div className = "hidden_menu_carm">Meal 2</div>
                  <div className = "hidden_menu_carm">Meal 3</div> */}
                </>
                )}
            
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