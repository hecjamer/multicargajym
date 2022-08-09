import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles/componentCarousel.scss';
// import { useState } from "react";
// import configuracion from '../data/configuracion.json';


function ComponentCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const url = "https://benjumeacarlos981.github.io/multicarga/original.json";
  const [configuracion, setTodos] = useState();

  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }

  useEffect(() => {
    fetchApi();

  }, [])


  return (
        <div className="ComponentCarousel">
          { !configuracion ? 'Cargando...' :
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
              {configuracion.carousel.diapositivas.map(detalle => {
                return (
                  <Carousel.Item key={detalle.id}>
                    <img className="d-block w-100" src={require(`../images/${detalle.imagen}`)} alt={detalle.alt}/>
                    <Carousel.Caption>
                      <h3>{detalle.descripcion}</h3>
                    </Carousel.Caption>
                    <div className="overlay">
                      <div className="container">
                        <div className="row">
                          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-ms-12 textCarouselRight">
                            <h1>{configuracion.carousel.tituloPrincipalH1}</h1>
                            <p>{configuracion.carousel.tituloPrincipalP}</p>
                            <a href="https://hecjamer.github.io/multicargajym/" className="btn btn-outline-light">{configuracion.carousel.tituloPrincipalA}</a>
                            <button type="button" className="btn">{configuracion.carousel.tituloPrincipalBTN}</button>

                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          }
        </div>
  );
}

export default ComponentCarousel;