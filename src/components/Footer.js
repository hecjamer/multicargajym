import React, {useContext} from 'react';
import './styles/footer.scss';
import RedesSociales from './RedesSociales';
import { DataContext } from '../DataContext';


function Footer() {
  const { configuracion } = useContext( DataContext );

    return (
      <div className="container-fluid footer-contenedor-fluid">
          <div className="row footerTop">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-ms-12 left">
                <h4>{configuracion.footer.propuestaValor.titulo}</h4>
                <p>{configuracion.footer.propuestaValor.detalle}</p>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-ms-12 center">
                <h4>{configuracion.footer.nuestrosServicios.nombre}</h4>
                <ul>
                  {configuracion.footer.nuestrosServicios.servicios.map(servicios => {
                    return (
                      <div key={servicios.id}>
                        <li>
                          <a href={servicios.href}>
                            <i className="fi-check"></i>
                            <span>{servicios.nombre}</span>
                          </a>
                        </li>
                        <hr />
                      </div>
                    )
                  })}
                </ul>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-ms-12 right">
                <h4>{configuracion.footer.contactanos.nombre}</h4>
                <ul>
                  {configuracion.footer.contactanos.comunicaciones.map(comunicaciones => {
                    return (
                      <div key={comunicaciones.id}>
                        <li>
                          <a href={comunicaciones.href}>
                          <i className={comunicaciones.icono} style={{color: `${comunicaciones.color}`}}></i>
                          <span>{comunicaciones.detalle}</span>
                          </a>
                        </li>
                        <hr />
                      </div>
                    )
                  })}
                </ul>
              </div>
          </div>

          <div className="row footerBootom">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-ms-12 left">
              <i className={configuracion.footer.derechosyRedes.icono}></i>
              <h6>{configuracion.footer.derechosyRedes.derechos}</h6>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-ms-12 right"><RedesSociales /></div>
          </div>
      </div>
     )

}

export default Footer;


