// import React, { useState } from 'react';
// import './Rating.css'; // Import the Rating styles
// import 'boxicons'; // Import the Boxicons CSS

// const Rating = ({ iconType = 'star' }) => {
//   const [ratings, setRatings] = useState([]); // Store the array of ratings
//   const [userRating, setUserRating] = useState(0); // Current rating selected by the user
//   const [hoveredRating, setHoveredRating] = useState(0); // To display the hovered icons for preview
//   const [isSubmitted, setIsSubmitted] = useState(false); // Track if the rating has been submitted

//   // Function to calculate the average rating
//   const calculateAverageRating = () => {
//     if (ratings.length === 0) return 0; // Avoid division by zero if no ratings yet
//     const total = ratings.reduce((acc, rating) => acc + rating, 0);
//     const average = total / ratings.length;
//     return Math.round(average); // Round to the nearest integer
//   };

//   // Handle the user clicking on an icon to select the rating
//   const handleIconClick = (rating) => {
//     if (!isSubmitted) {
//       setUserRating(rating); // Update the selected rating
//     }
//   };

//   // Handle mouse hover over an icon for preview
//   const handleIconHover = (rating) => {
//     if (!isSubmitted) {
//       setHoveredRating(rating); // Set the rating for hover preview
//     }
//   };

//   // Handle mouse leave to reset hover effect
//   const handleMouseLeave = () => {
//     setHoveredRating(0); // Reset hover rating
//   };

//   // Handle form submission to add the user's rating
//   const handleRatingSubmit = (e) => {
//     e.preventDefault();
//     if (userRating >= 1 && userRating <= 5) {
//       setRatings([...ratings, userRating]); // Add the rating to the ratings array
//       setIsSubmitted(true); // Mark as submitted
//     } else {
//       alert('Please select a rating between 1 and 5!');
//     }
//   };

//   const averageRating = calculateAverageRating();

//   // Generate the appropriate icon for stars or people based on the iconType
//   const renderIcon = (type, filled) => {
//     const color = type === 'star' ? '#f7c21a' : '#88ddf5'; // Set color for star or person
//     if (type === 'star') {
//       return filled ? (
//         <box-icon name="star" type="solid" color={color}></box-icon>
//       ) : (
//         <box-icon name="star" color={color}></box-icon>
//       );
//     } else if (type === 'person') {
//       return filled ? (
//         <box-icon name="user" type="solid" color={color}></box-icon>
//       ) : (
//         <box-icon name="user" color={color}></box-icon>
//       );
//     }
//   };

//   return (
//     <div>
//       <div>
//         {/* Display the average rating using the chosen icon */}
//         {[...Array(averageRating)].map((_, index) => (
//           <span key={index}>{renderIcon(iconType, true)}</span>
//         ))}
//       </div>
//       <div>Average Rating: {averageRating} / 5</div>

//       <h4>Your Rating</h4>
//       <div className="icon-rating">
//         {/* Create 5 icons (either stars or people) */}
//         {[1, 2, 3, 4, 5].map((icon) => (
//           <span
//             key={icon}
//             onClick={() => handleIconClick(icon)} // Set the rating when clicked
//             onMouseEnter={() => handleIconHover(icon)} // Show preview on hover
//             onMouseLeave={handleMouseLeave} // Reset on mouse leave
//           >
//             {/* Show filled icon if user rating or hovered rating is equal to or greater than the icon number */}
//             {renderIcon(
//               iconType,
//               userRating >= icon || hoveredRating >= icon
//             )}
//           </span>
//         ))}
//       </div>

//       {/* Show Submit button only if not submitted yet */}
//       {!isSubmitted && (
//         <button onClick={handleRatingSubmit}>Submit Rating</button>
//       )}

//       {/* Show the submitted rating */}
//       {isSubmitted && (
//         <div>Your rating: {userRating} / 5</div>
//       )}
//     </div>
//   );
// };

// export default Rating;





// import React, { useState, useEffect } from 'react';
// import './Rating.css'; // Import the Rating styles
// import 'boxicons'; // Import the Boxicons CSS
// import confetti from 'canvas-confetti'; 

// const Rating = ({ iconType = 'star' }) => {
//   const [ratings, setRatings] = useState([]); // Store the array of ratings
//   const [userRating, setUserRating] = useState(0); // Current rating selected by the user
//   const [hoveredRating, setHoveredRating] = useState(0); // To display the hovered icons for preview
//   const [isSubmitted, setIsSubmitted] = useState(false); // Track if the rating has been submitted

//   // Function to calculate the average rating
//   const calculateAverageRating = () => {
//     if (ratings.length === 0) return 0; // Avoid division by zero if no ratings yet
//     const total = ratings.reduce((acc, rating) => acc + rating, 0);
//     const average = total / ratings.length;
//     return Math.round(average); // Round to the nearest integer
//   };
      
//   // Function to trigger confetti animation
//   const triggerConfetti = () => {
//     confetti({
//       particleCount: 75, // Number of confetti particles
//       spread: 75, // Spread angle
//       origin: { x: 0.5, y: 0.5 }, // Origin (center of the screen)
//     //   colors: ['#ff0', '#0f0', '#00f'], // Color of the confetti
//       colors: ['#000080', '#87ceeb', '#8b4513'],
//     });
//   };
    
//   // Function to load ratings from localStorage
//   const loadRatings = () => {
//     const storedRatings = JSON.parse(localStorage.getItem('ratings'));
//     if (storedRatings) {
//       setRatings(storedRatings); // Load ratings from localStorage if available
//     }
//   };

//   // Store the ratings to localStorage whenever ratings change
//   const saveRatings = (updatedRatings) => {
//     localStorage.setItem('ratings', JSON.stringify(updatedRatings));
//   };

//   // Effect to load ratings on component mount
//   useEffect(() => {
//     loadRatings();
//   }, []);

//   // Handle the user clicking on an icon to select the rating
//   const handleIconClick = (rating) => {
//     if (!isSubmitted) {
//       setUserRating(rating); // Update the selected rating
//     }
//   };

//   // Handle mouse hover over an icon for preview
//   const handleIconHover = (rating) => {
//     if (!isSubmitted) {
//       setHoveredRating(rating); // Set the rating for hover preview
//     }
//   };

//   // Handle mouse leave to reset hover effect
//   const handleMouseLeave = () => {
//     setHoveredRating(0); // Reset hover rating
//   };

//   // Handle form submission to add the user's rating
//   const handleRatingSubmit = (e) => {
//     e.preventDefault();
//     if (userRating >= 1 && userRating <= 5) {
//       const updatedRatings = [...ratings, userRating]; // Add the rating to the ratings array
//       setRatings(updatedRatings); // Update state with new ratings array
//       saveRatings(updatedRatings); // Save the new ratings array to localStorage
//       setIsSubmitted(true); // Mark as submitted
//       triggerConfetti();
//     } else {
//       alert('Please select a rating between 1 and 5!');
//     }
//   };

//   const averageRating = calculateAverageRating();

//   // Generate the appropriate icon for stars or people based on the iconType
//   const renderIcon = (type, filled) => {
//     const color = type === 'star' ? '#f7c21a' : '#88ddf5'; // Set color for star or person
//     if (type === 'star') {
//       return filled ? (
//         <box-icon name="star" type="solid" color={color}></box-icon>
//       ) : (
//         <box-icon name="star" color={color}></box-icon>
//       );
//     } else if (type === 'person') {
//       return filled ? (
//         <box-icon name="user" type="solid" color={color}></box-icon>
//       ) : (
//         <box-icon name="user" color={color}></box-icon>
//       );
//     }
//   };

//   return (
//     <div>
//       <div>
//         {/* Display the average rating using the chosen icon */}
//         {[...Array(averageRating)].map((_, index) => (
//           <span key={index}>{renderIcon(iconType, true)}</span>
//         ))}
//       </div>
//       <div>Average Rating: {averageRating} / 5</div>

//       <h4>Your Rating</h4>
//       <div className="icon-rating">
//         {/* Create 5 icons (either stars or people) */}
//         {[1, 2, 3, 4, 5].map((icon) => (
//           <span
//             key={icon}
//             onClick={() => handleIconClick(icon)} // Set the rating when clicked
//             onMouseEnter={() => handleIconHover(icon)} // Show preview on hover
//             onMouseLeave={handleMouseLeave} // Reset on mouse leave
//           >
//             {/* Show filled icon if user rating or hovered rating is equal to or greater than the icon number */}
//             {renderIcon(
//               iconType,
//               userRating >= icon || hoveredRating >= icon
//             )}
//           </span>
//         ))}
//       </div>

//       {/* Show Submit button only if not submitted yet */}
//       {!isSubmitted && (
//         <button onClick={handleRatingSubmit}>Submit Rating</button>
//       )}

//       {/* Show the submitted rating */}
//       {isSubmitted && (
//         <div>Your rating: {userRating} / 5</div>
//       )}
//     </div>
//   );
// };

// export default Rating;
import React, { useState, useEffect } from 'react';
import './Rating.css'; // Import the Rating styles
import 'boxicons'; // Import the Boxicons CSS
import confetti from 'canvas-confetti'; 

const Rating = ({ iconType = 'star' }) => {
  const [ratings, setRatings] = useState([]); // Store the array of ratings
  const [userRating, setUserRating] = useState(0); // Current rating selected by the user
  const [hoveredRating, setHoveredRating] = useState(0); // To display the hovered icons for preview
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the rating has been submitted

  // Function to calculate the average rating
  const calculateAverageRating = () => {
    if (ratings.length === 0) return 0; // Avoid division by zero if no ratings yet
    const total = ratings.reduce((acc, rating) => acc + rating, 0);
    const average = total / ratings.length;
    return Math.round(average); // Round to the nearest integer
  };
      
  // Function to trigger confetti animation
  const triggerConfetti = () => {
    confetti({
      particleCount: 75, // Number of confetti particles
      spread: 75, // Spread angle
      origin: { x: 0.5, y: 0.5 }, // Origin (center of the screen)
      colors: ['#000080', '#87ceeb', '#8b4513'],
    });
  };
    
  // Function to load ratings from localStorage
  const loadRatings = () => {
    const storedRatings = JSON.parse(localStorage.getItem('ratings'));
    if (storedRatings) {
      setRatings(storedRatings); // Load ratings from localStorage if available
    }
  };

  // Store the ratings to localStorage whenever ratings change
  const saveRatings = (updatedRatings) => {
    localStorage.setItem('ratings', JSON.stringify(updatedRatings));
  };

  // Effect to load ratings on component mount
  useEffect(() => {
    loadRatings();
  }, []);

  // Handle the user clicking on an icon to select the rating
  const handleIconClick = (rating) => {
    if (!isSubmitted) {
      setUserRating(rating); // Update the selected rating
    }
  };

  // Handle mouse hover over an icon for preview
  const handleIconHover = (rating) => {
    if (!isSubmitted) {
      setHoveredRating(rating); // Set the rating for hover preview
    }
  };

  // Handle mouse leave to reset hover effect
  const handleMouseLeave = () => {
    if (!isSubmitted) {
      setHoveredRating(0); // Reset hover rating only if not submitted
    }
  };

  // Handle form submission to add the user's rating
  const handleRatingSubmit = (e) => {
    e.preventDefault();
    if (userRating >= 1 && userRating <= 5) {
      const updatedRatings = [...ratings, userRating]; // Add the rating to the ratings array
      setRatings(updatedRatings); // Update state with new ratings array
      saveRatings(updatedRatings); // Save the new ratings array to localStorage
      setIsSubmitted(true); // Mark as submitted
      triggerConfetti();
    } else {
      alert('Please select a rating between 1 and 5!');
    }
  };

  const averageRating = calculateAverageRating();

  // Generate the appropriate icon for stars or people based on the iconType
  const renderIcon = (type, filled) => {
    const color = type === 'star' ? '#f7c21a' : '#88ddf5'; // Set color for star or person
    if (type === 'star') {
      return filled ? (
        <box-icon name="star" type="solid" color={color}></box-icon>
      ) : (
        <box-icon name="star" color={color}></box-icon>
      );
    } else if (type === 'person') {
      return filled ? (
        <box-icon name="user" type="solid" color={color}></box-icon>
      ) : (
        <box-icon name="user" color={color}></box-icon>
      );
    }
  };

  return (
    <div>
      <div>
        {/* Display the average rating using the chosen icon */}
        {[...Array(averageRating)].map((_, index) => (
          <span key={index}>{renderIcon(iconType, true)}</span>
        ))}
      </div>
      <div>Average Rating: {averageRating} / 5</div>

      <h4>Your Rating</h4>
      <div className="icon-rating">
        {/* Create 5 icons (either stars or people) */}
        {[1, 2, 3, 4, 5].map((icon) => (
          <span
            key={icon}
            onClick={() => handleIconClick(icon)} // Set the rating when clicked
            onMouseEnter={() => handleIconHover(icon)} // Show preview on hover
            onMouseLeave={handleMouseLeave} // Reset on mouse leave
          >
            {/* Show filled icon if user rating or hovered rating is equal to or greater than the icon number */}
            {renderIcon(
              iconType,
              // Show filled icon based on the selected userRating, or temporarily based on hoveredRating
              userRating >= icon || (hoveredRating >= icon && userRating === 0) 
            )}
          </span>
        ))}
      </div>

      {/* Show Submit button only if not submitted yet */}
      {!isSubmitted && (
        <button onClick={handleRatingSubmit}>Submit Rating</button>
      )}

      {/* Show the submitted rating */}
      {isSubmitted && (
        <div>Your rating: {userRating} / 5</div>
      )}
    </div>
  );
};

export default Rating;

