import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../images/aboutbook.jpg';
import image2 from '../../images/days.jpeg';
import image3 from '../../images/bookreview.jpg';

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel 
        showThumbs={false} 
        autoPlay 
        infiniteLoop 
        interval={3000} 
        stopOnHover
        showArrows
        showStatus={false}
        dynamicHeight={false}
        emulateTouch
      >
        <div>
          <img src={image1} alt="First slide" />
        </div>
        <div>
          <img src={image2}alt="Second slide" />
        </div>
        <div>
          <img src={image3} alt="Third slide" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
