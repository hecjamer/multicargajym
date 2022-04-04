import React from 'react';
import './styles/CintaContacto.scss';

class CintaContacto extends React.Component {
  render() {
    return (
      <div className="container-fuild cintaContacto">
        <div className="row">
          <div className="col-lg-8 col-sm-12 cintaContacto-Contactenos">
            <div className="row">
              <div className="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-ms-12 cintaContacto-Contactenos-element"><a href=""><i className="fi-telephone"></i>4666697</a></div>
              <div className="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-ms-12 cintaContacto-Contactenos-element"><a href=""><i className="fi-telephone"></i>3102508479</a></div>
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-ms-12 cintaContacto-Contactenos-element"><a href="mailto:logistica.bujacargo.jm@gmail.com"><i className="fi-mail"></i>logistica.bujacargo.jm@gmail.com</a></div>
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-ms-12 cintaContacto-Contactenos-element"><a href=""><i className="fi-marker"></i>Calle 10A No 42B - 38 Bogotá</a></div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 cintaContacto-redesSociales">
            <div className="row">
              <div className="col-3"><a href="https://twitter.leonidasesteban" className="social-link twitter"></a></div>
              <div className="col-3"><a href="https://facebook.com/leonidas.esteban" className="social-link facebook"></a></div>
              <div className="col-3"><a href="https://instagram.com/leonidasesteban" className="social-link instagram"></a></div>
              <div className="col-3"><a href="https://instagram.com/leonidasesteban" className="social-link github"></a></div>

            </div>

          </div>
        </div>

      </div>


    )

  }
}

export default CintaContacto;