import React, { useState, useEffect } from 'react';
import img1 from './img1.jpg';
import img2 from './img2.png';


const images = [
  <img src={img1} alt='image' />,
  <img src={img2} alt='image' />
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div >
      {images.map((image, index) => (
        <img className='img'
          key={index}
          src={image.props.src}
          alt="slideshow"
          style={{
            display: index === currentImage ? 'block' : 'none',
            width:'100%'
          }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;