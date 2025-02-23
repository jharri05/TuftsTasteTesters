import React from 'react';
import Rating from './Rating'

function Dewick() {
  return (
    <div>
      <h1>Dewick Dining Hall</h1>
      <p>Find out what's on the menu at Dewick today!</p>

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

    </div>
  );
}

export default Dewick;

