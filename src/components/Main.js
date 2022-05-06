import React from 'react';
import './styles/main.scss';
import ComponentCarousel from './ComponentCarousel';
import Servicios from './Servicios';
import Placetime from './PlaceTime';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <ComponentCarousel />
        <Servicios />
        <Placetime/>
      </div>

    )
  }
}

export default Main;