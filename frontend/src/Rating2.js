import React, { useState } from 'react';
import './Rating.css';
import 'boxicons' 

const Rating = ({ emoji = '⭐' }) => {
  const [ratings, setRatings] = useState([]); // Store the array of ratings
  const [userRating, setUserRating] = useState(0); // Current rating selected by the user
  const [hoveredRating, setHoveredRating] = useState(0); // To display the hovered stars for preview

  // Function to calculate the average rating
  const calculateAverageRating = () => {
    if (ratings.length === 0) return 0; // Avoid division by zero if no ratings yet
    const total = ratings.reduce((acc, rating) => acc + rating, 0);
    const average = total / ratings.length;
    return Math.round(average); // Round to the nearest integer
  };

  // Function to generate emojis based on the average rating
  const generateEmojis = (average) => {
    return emoji.repeat(average); // Repeat the emoji based on the average
  };

  // Handle the user clicking on a star to select the rating
  const handleStarClick = (rating) => {
    setUserRating(rating); // Update the selected rating
  };

  // Handle mouse hover over a star for preview
  const handleStarHover = (rating) => {
    setHoveredRating(rating); // Set the rating for hover preview
  };

  // Handle mouse leave to reset hover effect
  const handleMouseLeave = () => {
    setHoveredRating(0); // Reset hover rating
  };

  // Handle form submission to add the user's rating
  const handleRatingSubmit = (e) => {
    e.preventDefault();
    if (userRating >= 1 && userRating <= 5) {
      setRatings([...ratings, userRating]); // Add the rating to the ratings array
      setUserRating(0); // Reset the user input field
    } else {
      alert('Please select a rating between 1 and 5!');
    }
  };

  const averageRating = calculateAverageRating();
  const emojis = generateEmojis(averageRating);

  return (
    <div>
      <div>
        <span>{emojis}</span> {/* Display the emojis */}
      </div>
      <div>Average Rating: {averageRating} / 5</div>

      <h4>Your Rating</h4>
      <div className="star-rating">
        {/* Create 5 stars */}
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${userRating >= star || hoveredRating >= star ? 'filled' : ''}`}
            onClick={() => handleStarClick(star)} // Set the rating when clicked
            onMouseEnter={() => handleStarHover(star)} // Show preview on hover
            onMouseLeave={handleMouseLeave} // Reset on mouse leave
          >
            {emoji}
          </span>
        ))}
      </div>

      <button onClick={handleRatingSubmit}>Submit Rating</button>
    </div>
  );
};

export default Rating;