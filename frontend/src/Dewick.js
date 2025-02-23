import Rating from './Rating'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <h1>Dewick Dining Hall</h1>
      <p>Find out what's on the menu at Dewick today!</p>
      <h2>Today's Menu</h2>
            <ul>
                {menu.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
      {/* Rating commands */}
      <h1>Product Rating</h1>
      {/* Example: Using default emoji (⭐)
      <h3>Food Rating</h3>
      <Rating /> 
      <h3>Busyness</h3>
      <Rating emoji="👤" /> */}

      <h3>Food Rating</h3>
      <Rating iconType="star" />
      <h3>Busyness</h3>
      <Rating iconType="person" />
      {/* <h3>Utensils?</h3>
      <Rating iconType="fork" /> */}
      <Rating iconType="fork" /> {/* This will render the fork icons */}


    </div>
  );
}

export default Dewick;

