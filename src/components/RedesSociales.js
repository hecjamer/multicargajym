import React from 'react';
// import './styles/CintaContacto.scss';
import './styles/redesSociales.scss';
import contacto from '../data/configuracion.json'

// import * as ReactBootStrap from "react-bootstrap"; // extension de ReactBootStrap

class RedesSociales extends React.Component {
  render() {
    return (
        <div className="row redesSociales-container">
            {contacto.contacto.redesSociales.map(redes => {
              return (
                <div className={redes.col} key={redes.id}>
                  <a href={redes.href} className={redes.className}>""</a>
                </div>
              )
            })}
        </div>
    )
  }
}

export default RedesSociales;

