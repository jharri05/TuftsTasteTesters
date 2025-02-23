import React from "react";
import "./welcome.css";import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { Routes } from "react-router-dom";
// import Dewick from "./Dewick";


function Welcome () { 
    return (
        <div >
            <div className = "nav_div">
                <ul className = "nav">
                    <li>Home</li>
                    <li>Dining Menus</li>
                    {/* <li>Vote</li>
                    <li><Link to="/">Home</Link></li> */}
                    {/* <li><Link to="/Dewick">Dining Menus</Link></li>
                    <li><Link to="/">About</Link></li> */}

                </ul>
            </div>
            <header className="App-header">
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
//     return (
//       <Router>
//         <div className="App">
//           <header className="App-header">
//             {/* Navigation Bar */}
//             <nav>
//               <ul>
//                 <li>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                   <Link to="/Dewick">About</Link>
//                 </li>
//                 <li>
//                   <Link to="/welcome">Welcome</Link>
//                 </li>
//               </ul>
//             </nav>
  
//             {/* Routes */}
//             <Routes>
//               <Route path="/" exact element={<Welcome />} />
//               <Route path="/Dewick" element={<Dewick />} />
//               <Route path="/welcome" element={<Welcome />} />
//             </Routes>
//           </header>
//         </div>
//       </Router>
//     );
//   }
  
export default Welcome;