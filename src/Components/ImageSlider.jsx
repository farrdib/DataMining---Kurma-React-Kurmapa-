import React, { useState } from 'react';
import './History.css';
import gambarkurma1 from '../assets/images/kurmasejarah1.jpg';
import gambarkurma2 from '../assets/images/kurmasejarah2.jpg';
import gambarkurma3 from '../assets/images/kurmasejarah3.jpg';
import gambarkurma4 from '../assets/images/kurmasejarah4.jpg';
import gambarkurma5 from '../assets/images/kurmasejarah5.jpg';
import gambarkurma6 from '../assets/images/kurmasejarah6.jpg';
import gambarkurma7 from '../assets/images/kurmasejarah7.jpg';
import gambarkurma8 from '../assets/images/kurmasejarah8.jpg';
import gambarkurma9 from '../assets/images/kurmasejarah9.jpg';
import gambarkurma10 from '../assets/images/kurmasejarah10.jpg';

const images = [gambarkurma1, gambarkurma2, gambarkurma3, gambarkurma4, gambarkurma5, gambarkurma6,gambarkurma7,gambarkurma8,gambarkurma9,gambarkurma10];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider">
      <button className="arrow left-arrow" onClick={handlePrevClick}>
        &#9664;
      </button>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Dates in a bowl"
            className={`dates-bowl ${index === currentImageIndex ? 'fade-enter-active' : 'fade-enter'}`}
            style={{ display: index === currentImageIndex ? 'block' : 'none' }}
            width="300" /* Set the same width */
            height="300" /* Set the same height */
          />
        ))}
      </div>
      <button className="arrow right-arrow" onClick={handleNextClick}>
        &#9654;
      </button>
    </div>
  );
};

export default ImageSlider;
