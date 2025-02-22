import React from "react";
import "./welcome.css";

function Welcome () { 
    return(
        <div >
            <header className="App-header">
                <h1>Welcome to Tufts Taste Testers!</h1>
                <p> Where we serve the truth, one dining hall at a time</p>
                <p>This is how busy it is out of 5 👤</p>
            </header>
      
            <ul className = "nav">
                <li>Home</li>
                <li>Dining Menus</li>
                <li>Vote</li>
            </ul>

        </div>
    );
}
export default Welcome;