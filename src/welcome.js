import React from "react";
import { Link } from 'react-router-dom';
import "./welcome.css";

function Welcome() { 
    return (
        <div>
            <section className = "welcome_note">
                <h1>Welcome to Tufts Taste Testers!</h1>
                <p>Serving the truth, one dining hall at a time</p>
            </section>

            <section className = "after_welcome">
                <div className = "ttt_info">
                   Tufts Taste Testers is here to help you keep 
                   track of busyness and menus at Tufts Dinning halls. 
                   Head down to see how busy it is at dewick 
                </div>
                <hr />
            </section>

        </div>
    );
}

export default Welcome;
