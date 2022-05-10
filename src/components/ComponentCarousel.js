import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles/componentCarousel.scss';
import { useState } from "react";
import configuracion from '../data/configuracion.json';


function ComponentCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
        <div className="ComponentCarousel">
          <Carousel fade activeIndex={index} onSelect={handleSelect}>
            {configuracion.carousel.diapositivas.map(detalle => {
              return (
                <Carousel.Item key={detalle.id}>
                  <img className="d-block w-100" src={require(`../images/${detalle.imagen}`)} alt={detalle.alt}/>
                  <Carousel.Caption>
                    <h3>{detalle.descripcion}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </div>
  );
}

export default ComponentCarousel;