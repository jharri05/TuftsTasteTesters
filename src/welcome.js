import React from "react";
import "./welcome.css";import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Routes } from "react-router-dom";
function Welcome () { 
    return (
        <div >
            <div className = "nav_div">
                <ul className = "nav">
                    <li>Home</li>
                    <li>Dining Menus</li>
                    <li>Vote</li>
                </ul>
            </div>
            <header comelassName="App-header">
                <h1>Welcome to Tufts Taste Testers!</h1>
                <p> Where we serve the truth, one dining hall at a time</p>
                <p>This is how busy it is out of 5 👤</p>
            </header>

        </div>
    );
}


// function AboutPage() {
//     return (
//       <div>
//         <h1>About Tufts Taste Testers</h1>
//         <p>Learn about our mission and how we review dining halls!</p>
//       </div>
//     );
// }
// function App() {
    // return (
    //   <Router>
    //     <div className="App">
    //       <header className="App-header">
    //         {/* Navigation Bar */}
    //         <nav>
    //           <ul>
    //             <li>
    //               <Link to="/">Home</Link>
    //             </li>
    //             <li>
    //               <Link to="/about">About</Link>
    //             </li>
    //             <li>
    //               <Link to="/welcome">Welcome</Link>
    //             </li>
    //           </ul>
    //         </nav>
  
    //         {/* Routes */}
    //         <Routes>
    //           <Route path="/" exact element={Welcome} />
    //           <Route path="/about" element={AboutPage} />
    //           <Route path="/welcome" element={Welcome} />
    //         </Routes>
    //       </header>
    //     </div>
    //   </Router>
//     );
//   }
  
export default Welcome;