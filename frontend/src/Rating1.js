import React, { useState } from 'react';

// const Rating = () => {
const Rating = ({ emoji = '⭐' }) => {
  const [ratings, setRatings] = useState([4, 5, 3, 4, 2]); // Example ratings array

  // Function to calculate the average rating
  const calculateAverageRating = () => {
    if (ratings.length === 0) return 0;
    const total = ratings.reduce((acc, rating) => acc + rating, 0);
    const average = total / ratings.length;
    return Math.round(average); // Round to the nearest integer
  };

  // Function to generate emojis based on the average rating
  const generateEmojis = (average) => {
    // const emoji = '⭐'; // You can use any emoji or symbol here
    return emoji.repeat(average); // Repeat the emoji based on the average
  };

  const averageRating = calculateAverageRating();
  const emojis = generateEmojis(averageRating);

  return (
    <div>
      {/* <h3>Average Rating</h3> */}
      <div>
        <span>{emojis}</span> {/* Display the emojis */}
      </div>
      <div>Average Rating: {averageRating} / 5</div>
    </div>
  );
};

export default Rating;