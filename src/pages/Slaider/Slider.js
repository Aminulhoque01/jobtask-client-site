import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../image/Signup1050x650-1659538641085.webp'
import image2 from '../../image/download.jpg'
import image3 from '../../image/jobs-16492374483x2.jpg'


const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>WEL Come out job platform</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>WEL Come out job platform</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>WEL Come out job platform</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
};

export default Slider;
