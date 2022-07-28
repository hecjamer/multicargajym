import React from 'react';
import './styles/whatsApp.scss';
import datosWhatsApp from '../data/configuracion.json';



class WhatsApp extends React.Component {
  render() {

    return (
      <div className="divWhatsApp">

        <a href={datosWhatsApp.whatsApp.href} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp " style={{
            color: `${datosWhatsApp.whatsApp.color}`,
            backgroundColor: `${datosWhatsApp.whatsApp.backgroundColor}`

            }} >
          </i>
        </a>



      </div>

  )

  }
}

export default WhatsApp;


