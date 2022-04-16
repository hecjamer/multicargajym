import React from 'react';
import './styles/CintaContacto.scss';
import contacto from '../data/configuracion.json'

class CintaContacto extends React.Component {
  render() {
    return (
      <div className="container-fuild cintaContacto">
        <div className="row">
          <div className="col-lg-8 col-sm-12 cintaContacto-Contactenos">
            <div className="row">
              <div className="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-ms-12 cintaContacto-Contactenos-element"><a href=""><i className="fi-telephone"></i>{contacto.contacto.telefono}</a></div>
              <div className="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-ms-12 cintaContacto-Contactenos-element"><a href=""><i className="fi-telephone"></i>{contacto.contacto.celular}</a></div>
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-ms-12 cintaContacto-Contactenos-element"><a href="mailto:logistica.bujacargo.jm@gmail.com"><i className="fi-mail"></i>{contacto.contacto.email}</a></div>
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-ms-12 cintaContacto-Contactenos-element"><a href=""><i className="fi-marker"></i>{contacto.contacto.direccion}</a></div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 cintaContacto-redesSociales">
            <div className="row">
              {contacto.contacto.redesSociales.map(redes => {
                return (
                  <div className={redes.col} key={redes.id}><a href={redes.href} className={redes.className}></a></div>
                )
              })}
              </div>

          </div>
        </div>

      </div>


    )

  }
}

export default CintaContacto;