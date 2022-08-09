import React, {useContext} from 'react';
import './styles/CintaContacto.scss';
import { DataContext } from '../DataContext';

import * as ReactBootStrap from "react-bootstrap"; // extension de ReactBootStrap

function CintaContacto() {

  const { configuracion } = useContext( DataContext );
  return (
    <div className="container-fuild cintaContacto">
      { !configuracion ? 'Cargando...' :
        <div className="row">
          <div className="col-lg-8 col-sm-12 cintaContacto-Contactenos">
            <div className="row">
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-ms-12 cintaContacto-Contactenos-element"><a href=""><i className="fi-telephone"></i>{configuracion.contacto.telefono}</a></div>
              <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-ms-12 cintaContacto-Contactenos-element"><a href=""><i className="fi-telephone"></i>{configuracion.contacto.celular}</a></div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-ms-12 cintaContacto-Contactenos-element"><a href="mailto:logistica.bujacargo.jm@gmail.com"><i className="fi-mail"></i>{configuracion.contacto.email}</a></div>
              <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-ms-12 cintaContacto-Contactenos-element"><a href=""><i className="fi-marker"></i>{configuracion.contacto.direccion}</a></div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 cintaContacto-redesSociales">
            <div className="row">
              {configuracion.contacto.redesSociales.map(redes => {
                return (
                  <div className={redes.col} key={redes.id}><a href={redes.href} className={redes.className}></a></div>
                )
              })}
            </div>
          </div>
        </div>
      }
    </div>


  )

}

export default CintaContacto;

