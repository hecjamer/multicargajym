import React from 'react'
// import './styles/servicios.scss'
import configuracion from '../data/configuracion.json'

class Servicios extends React.Component {

  render() {

    configuracion.servicios.card.forEach(elementos => {
      console.log(elementos.titulo)

    })

    return (
      <div className="container-fluid">
        <div className="container container-servicios">



        </div>
      </div>

    )
  }
}

export default Servicios;