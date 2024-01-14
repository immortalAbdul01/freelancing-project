// src/components/ImageGallery.js
import React from 'react';
import './Home.css'; // Rename this file to ImageGallery.css
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';

const Home = () => {
  return (
    <div className="image-gallery-container">

      <div className="image-wrapper">
        <img src={img1} alt="First Image" className="gallery-image" />
        <img src={img2} alt="Second Image" className="gallery-image" />
      </div>
    </div>
  );
};

export default Home;
