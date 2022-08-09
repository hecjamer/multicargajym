import React, {useState, useEffect} from 'react';
import './styles/footer.scss';
import RedesSociales from './RedesSociales';
// import datosFooter from '../data/configuracion.json';


function Footer() {

  const url = "https://benjumeacarlos981.github.io/multicarga/original.json";
  const [datosFooter, setTodos] = useState()

  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setTodos(responseJSON)
  }

  useEffect(() => {
    fetchApi();

  }, [])


    return (
      <>
      { !datosFooter ? 'Cargando...' :
      <div className="container-fluid footer-contenedor-fluid">
          <div className="row footerTop">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-ms-12 left">
                <h4>{datosFooter.footer.propuestaValor.titulo}</h4>
                <p>{datosFooter.footer.propuestaValor.detalle}</p>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-ms-12 center">
                <h4>{datosFooter.footer.nuestrosServicios.nombre}</h4>
                <ul>
                  {datosFooter.footer.nuestrosServicios.servicios.map(servicios => {
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
                <h4>{datosFooter.footer.contactanos.nombre}</h4>
                <ul>
                  {datosFooter.footer.contactanos.comunicaciones.map(comunicaciones => {
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
              <i className={datosFooter.footer.derechosyRedes.icono}></i>
              <h6>{datosFooter.footer.derechosyRedes.derechos}</h6>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-ms-12 right"><RedesSociales /></div>
          </div>
      </div>
     }
     </>
    )

}

export default Footer;


