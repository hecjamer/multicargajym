import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles/componentCarousel.scss';
import imagen1 from '../images/img-carousel1.jpg';
import imagen2 from '../images/img-carousel2.jpg';
import imagen3 from '../images/img-carousel3.jpg';
import imagen4 from '../images/img-carousel4.jpg';


class ComponentCarousel extends React.Component {
  render() {
    return (
      <div className="ComponentCarousel">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={imagen1} alt="First slide"/>
            <Carousel.Caption>
              <h3>Transporte de carga a nivel nacional</h3>
              <p>Transportamos su encomientas de puerta a puerta con la mayor delicadeza</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={imagen2} alt="First slide"/>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={imagen3} alt="First slide"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={imagen4} alt="First slide"/>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 textCarouselLeft"></div>
                <div className="col-lg-6 textCarouselRight">
                  <h1>Soluciones Integrales Bujacargo</h1>
                  <p>Bujacargo es una empresa trasportadora dedicada a transporte de toda clase de mercancía a nivel nacional y local garantizando seguridad, agilidad y experiencia</p>
                </div>
              </div>


            </div>


          </div>

        </Carousel>
      </div>
    )
  }

}




export default ComponentCarousel;