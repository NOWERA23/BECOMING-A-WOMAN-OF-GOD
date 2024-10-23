// src/Collage.js
import React from 'react';
import './Collage.css'; // Import the CSS file for styles

const Collage = () => {
  const images = [
    'A.png', 'P.png', 'E.png', 'H.png', 'ha.png', 
    'M.png', 'N.png', 'U.png', 'S.png', 'Y.png', 
    'per.png'
  ];

  return (
    <div className="collage-container">
      <h1>BECOMING A WOMAN OF GOD</h1>
      <div className="collage">
        {images.map((image, index) => (
          <img 
            src={require(`./${image}`)} 
            alt={`collage-${index}`} 
            key={index} 
            className={image === 'E.png' ? 'centered-image' : ''} // Apply class for centering E.png
          />
        ))}
      </div>
      <footer className="footer">BECOMING A WOMAN OF GOD</footer>
    </div>
  );
};

export default Collage;
