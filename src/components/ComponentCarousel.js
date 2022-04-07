import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles/componentCarousel.scss';
import { useState } from "react";
import imagen1 from '../images/img-carousel1.jpg';
import imagen2 from '../images/img-carousel2.jpg';
import imagen3 from '../images/img-carousel3.jpg';
import imagen4 from '../images/img-carousel4.jpg';


function ComponentCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="ComponentCarousel">
      <Carousel fade activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={imagen1} alt="First slide"/>
          <Carousel.Caption>
            <h3>Imagen1</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imagen2} alt="First slide"/>
          <Carousel.Caption>
            <h3>Imagen 2</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imagen3} alt="First slide"/>
          <Carousel.Caption>
            <h3>Imagen 3</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imagen4} alt="First slide"/>
          <Carousel.Caption>
            <h3>Imagen4</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}


export default ComponentCarousel;