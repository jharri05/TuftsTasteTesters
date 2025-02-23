import React, { useState } from 'react';
import './Rating.css'; // Import the Rating styles
import 'boxicons'; // Import the Boxicons CSS

const Rating = ({ iconType = 'star' }) => {
  const [ratings, setRatings] = useState([]); // Store the array of ratings
  const [userRating, setUserRating] = useState(0); // Current rating selected by the user
  const [hoveredRating, setHoveredRating] = useState(0); // To display the hovered icons for preview

  // Function to calculate the average rating
  const calculateAverageRating = () => {
    if (ratings.length === 0) return 0; // Avoid division by zero if no ratings yet
    const total = ratings.reduce((acc, rating) => acc + rating, 0);
    const average = total / ratings.length;
    return Math.round(average); // Round to the nearest integer
  };

  // Handle the user clicking on an icon to select the rating
  const handleIconClick = (rating) => {
    setUserRating(rating); // Update the selected rating
  };

  // Handle mouse hover over an icon for preview
  const handleIconHover = (rating) => {
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
              userRating >= icon || hoveredRating >= icon
            )}
          </span>
        ))}
      </div>

      <button onClick={handleRatingSubmit}>Submit Rating</button>
    </div>
  );
};

export default Rating;




// import React, { useState, useEffect } from 'react';
// import './Rating.css'; // Import the Rating styles
// import 'boxicons/css/boxicons.min.css'; // Import the Boxicons CSS

// const Rating = ({ iconType = 'star' }) => {
//   const [ratings, setRatings] = useState([]); // Store the array of ratings
//   const [userRating, setUserRating] = useState(0); // Current rating selected by the user
//   const [hoveredRating, setHoveredRating] = useState(0); // To display the hovered icons for preview
//   const [submitted, setSubmitted] = useState(false); // To track if the user has submitted their rating

//   // Load ratings from localStorage on component mount
//   useEffect(() => {
//     const savedRatings = JSON.parse(localStorage.getItem('ratings')) || [];
//     setRatings(savedRatings);
//   }, []);

//   // Function to calculate the average rating
//   const calculateAverageRating = () => {
//     if (ratings.length === 0) return 0; // Avoid division by zero if no ratings yet
//     const total = ratings.reduce((acc, rating) => acc + rating, 0);
//     const average = total / ratings.length;
//     return Math.round(average); // Round to the nearest integer
//   };

//   // Handle the user clicking on an icon to select the rating
//   const handleIconClick = (rating) => {
//     setUserRating(rating); // Update the selected rating
//   };

//   // Handle mouse hover over an icon for preview
//   const handleIconHover = (rating) => {
//     setHoveredRating(rating); // Set the rating for hover preview
//   };

//   // Handle mouse leave to reset hover effect
//   const handleMouseLeave = () => {
//     setHoveredRating(0); // Reset hover rating
//   };

//   // Handle form submission to add the user's rating
//   const handleRatingSubmit = (e) => {
//     e.preventDefault();
//     if (userRating >= 1 && userRating <= 5) {
//       // Add the rating to the array
//       const updatedRatings = [...ratings, userRating];
//       setRatings(updatedRatings);

//       // Store the updated ratings in localStorage
//       localStorage.setItem('ratings', JSON.stringify(updatedRatings));

//       // Mark the rating as submitted
//       setSubmitted(true);
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
//       <h3>Average Rating</h3>
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

//       {/* Hide the rating icons after submission */}
//       {!submitted && (
//         <button onClick={handleRatingSubmit}>Submit Rating</button>
//       )}

//       {/* Display a confirmation message once rating is submitted */}
//       {submitted && <div>Your rating has been submitted!</div>}
//     </div>
//   );
// };

// export default Rating;


// import React, { useState, useEffect } from 'react';
// import './Rating.css'; // Import the Rating styles
// import 'boxicons/css/boxicons.min.css'; // Import the Boxicons CSS

// const Rating = ({ iconType = 'star' }) => {
//   const [ratings, setRatings] = useState([]); // Store the array of ratings
//   const [userRating, setUserRating] = useState(0); // Current rating selected by the user
//   const [hoveredRating, setHoveredRating] = useState(0); // To display the hovered icons for preview
//   const [submitted, setSubmitted] = useState(false); // To track if the user has submitted their rating

//   // Load ratings from localStorage on component mount
//   useEffect(() => {
//     const savedRatings = JSON.parse(localStorage.getItem('ratings')) || [];
//     setRatings(savedRatings);
//   }, []);

//   // Function to calculate the average rating
//   const calculateAverageRating = () => {
//     if (ratings.length === 0) return 0; // Avoid division by zero if no ratings yet
//     const total = ratings.reduce((acc, rating) => acc + rating, 0);
//     const average = total / ratings.length;
//     return Math.round(average); // Round to the nearest integer
//   };

//   // Handle the user clicking on an icon to select the rating
//   const handleIconClick = (rating) => {
//     if (!submitted) {
//       setUserRating(rating); // Update the selected rating only if not submitted
//     }
//   };

//   // Handle mouse hover over an icon for preview
//   const handleIconHover = (rating) => {
//     if (!submitted) {
//       setHoveredRating(rating); // Set the rating for hover preview if not submitted
//     }
//   };

//   // Handle mouse leave to reset hover effect
//   const handleMouseLeave = () => {
//     if (!submitted) {
//       setHoveredRating(0); // Reset hover rating if not submitted
//     }
//   };

//   // Handle form submission to add the user's rating
//   const handleRatingSubmit = (e) => {
//     e.preventDefault();
//     if (userRating >= 1 && userRating <= 5) {
//       // Add the rating to the array
//       const updatedRatings = [...ratings, userRating];
//       setRatings(updatedRatings);

//       // Store the updated ratings in localStorage
//       localStorage.setItem('ratings', JSON.stringify(updatedRatings));

//       // Mark the rating as submitted
//       setSubmitted(true);
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
//       <h3>Average Rating</h3>
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
//             style={{ pointerEvents: submitted ? 'none' : 'auto' }} // Disable click events after submission
//           >
//             {/* Show filled icon if user rating or hovered rating is equal to or greater than the icon number */}
//             {renderIcon(
//               iconType,
//               userRating >= icon || hoveredRating >= icon
//             )}
//           </span>
//         ))}
//       </div>

//       {/* Hide the rating icons after submission */}
//       {!submitted && (
//         <button onClick={handleRatingSubmit}>Submit Rating</button>
//       )}

//       {/* Display a confirmation message once rating is submitted */}
//       {submitted && <div>Your rating has been submitted!</div>}
//     </div>
//   );
// };

// export default Rating;



// import React, { useState, useEffect } from 'react';
// import './Rating.css'; // Import the Rating styles
// import 'boxicons/css/boxicons.min.css'; // Import the Boxicons CSS

// const Rating = ({ iconType = 'star' }) => {
//   const [ratings, setRatings] = useState([]); // Store the array of ratings
//   const [userRating, setUserRating] = useState(0); // Current rating selected by the user
//   const [hoveredRating, setHoveredRating] = useState(0); // To display the hovered icons for preview
//   const [submitted, setSubmitted] = useState(false); // To track if the user has submitted their rating

//   // Load ratings from localStorage on component mount
//   useEffect(() => {
//     const savedRatings = JSON.parse(localStorage.getItem('ratings')) || [];
//     const savedUserRating = parseInt(localStorage.getItem('userRating'), 10);
//     setRatings(savedRatings);

//     if (savedUserRating) {
//       setUserRating(savedUserRating);
//       setSubmitted(true); // If there's a saved user rating, mark as submitted
//     }
//   }, []);

//   // Function to calculate the average rating
//   const calculateAverageRating = () => {
//     if (ratings.length === 0) return 0; // Avoid division by zero if no ratings yet
//     const total = ratings.reduce((acc, rating) => acc + rating, 0);
//     const average = total / ratings.length;
//     return Math.round(average); // Round to the nearest integer
//   };

//   // Handle the user clicking on an icon to select the rating
//   const handleIconClick = (rating) => {
//     if (!submitted) {
//       setUserRating(rating); // Update the selected rating only if not submitted
//     }
//   };

//   // Handle mouse hover over an icon for preview
//   const handleIconHover = (rating) => {
//     if (!submitted) {
//       setHoveredRating(rating); // Set the rating for hover preview if not submitted
//     }
//   };

//   // Handle mouse leave to reset hover effect
//   const handleMouseLeave = () => {
//     if (!submitted) {
//       setHoveredRating(0); // Reset hover rating if not submitted
//     }
//   };

//   // Handle form submission to add the user's rating
//   const handleRatingSubmit = (e) => {
//     e.preventDefault();
//     if (userRating >= 1 && userRating <= 5) {
//       // Add the rating to the array
//       const updatedRatings = [...ratings, userRating];
//       setRatings(updatedRatings);

//       // Store the updated ratings in localStorage
//       localStorage.setItem('ratings', JSON.stringify(updatedRatings));
//       localStorage.setItem('userRating', userRating); // Store the user's specific rating

//       // Mark the rating as submitted
//       setSubmitted(true);
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
//       <h3>Average Rating</h3>
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
//             style={{ pointerEvents: submitted ? 'none' : 'auto' }} // Disable click events after submission
//           >
//             {/* Show filled icon if user rating or hovered rating is equal to or greater than the icon number */}
//             {renderIcon(
//               iconType,
//               userRating >= icon || hoveredRating >= icon
//             )}
//           </span>
//         ))}
//       </div>

//       {/* Hide the rating icons after submission */}
//       {!submitted && (
//         <button onClick={handleRatingSubmit}>Submit Rating</button>
//       )}

//       {/* Display a confirmation message once rating is submitted */}
//       {submitted && <div>Your rating has been submitted!</div>}
//     </div>
//   );
// };

// export default Rating;
