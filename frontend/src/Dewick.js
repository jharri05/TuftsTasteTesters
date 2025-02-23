import Rating from './Rating'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./dewick.css";

function Dewick() {
  const [menu, setMenu] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/dewick")
            .then(response => {
                console.log("API Response:", response.data); // Debugging
                setMenu(response.data.menu);
            })
            .catch(error => {
                console.error("Error fetching menu:", error);
            });
    }, []);
  return (
    <div>
      <h4>Dewick Dining Hall</h4>
      {/* <p>Find out what's on the menu at Dewick today!</p>
      <h5>Today's Menu</h5> */}
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
      {/* Rating commands */}
      {/* <h3>Product Rating</h3> */}
      {/* Example: Using default emoji (⭐)
      <h3>Food Rating</h3>
      <Rating /> 
      <h3>Busyness</h3>
      <Rating emoji="👤" /> */}
      <div className = "dewick_tab">
        <div>
          <h3>Food Rating</h3>
          <Rating iconType="star" />
        </div>
        
        <div>
        <h3>Busyness</h3>
        <Rating iconType="person" />
        </div>

        <div>
        <h3>Utensils?</h3>
        <Rating iconType="fork" />
        </div>
      </div>

    </div>
  );
}

export default Dewick;

