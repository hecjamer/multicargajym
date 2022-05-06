import React from 'react'
// import ReactDOM from 'react-dom';
import './styles/placeTime.scss'
import Placetime from '../data/configuracion.json'


class PlaceTime extends React.Component {

  render() {
    console.log(Placetime.PlaceTime.url)
    return (
      <div className="container-fluid placeTime-contenedor-fluid">
        <div className="row">
          <div className="col-md-6 col-left">
            <img src={require(`../images/${Placetime.PlaceTime.url}`)} alt="" />
          </div>

          <div className="col-md-6 col-right">
          <h2>{Placetime.PlaceTime.titulo}</h2>
          <p>{Placetime.PlaceTime.detalle}</p>
          <a href="https://es.wikipedia.org/wiki/Honolulu" className="btn btn-outline-light btn-sm">Conocenos Más</a>
          </div>

        </div>

      </div>

    )
  }
}

export default PlaceTime;


