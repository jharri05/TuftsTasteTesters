import React from "react";
import { Link } from 'react-router-dom';
import "./welcome.css";
import dewick_pic from "./images/dewick-square.jpg"
import carm_pic from "./images/carm_pic.jpg"
import bg from "./images/bg.jpg"


function Welcome() { 
    return (
        <div>
            
            <section className = "welcome_note">
                <div className = "background"></div>
                <div className = "overlay_container">
                    <h1>Welcome to Tufts Taste Testers!</h1>
                    <p>Serving the truth, one dining hall at a time</p>
                </div>
            </section>

            <section className = "after_welcome">
                
                <div className = "ttt_info">
                   Tufts Taste Testers is here to help you keep 
                   track of busyness and menus at Tufts Dinning halls. 
                   Head down to see how busy it is at dewick 
                </div>
                <div className = "dinning_halls" >
                    <div className = "overlay"></div>
                    <div className="diner diner1">
                        <img src={dewick_pic} />
                        <div className = "menu_list_but">
                        <Link to="/diningmenu" className="menu_link">Check Menu</Link>
                        </div>
                    </div>
                    <div className="diner diner2">
                        <img src={carm_pic} />
                        <div className = "menu_list_but">
                        <Link to="/diningmenu" className="menu_link">Check Menu</Link>
                        </div>
                    </div>
                    
                    <img id = "bg" src={bg}/>
                </div>
            </section>
            


            

        </div>
    );
}

export default Welcome;
