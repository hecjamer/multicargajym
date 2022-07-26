import React from 'react';
import './styles/whatsApp.scss';
import datosWhatsApp from '../data/configuracion.json';



class WhatsApp extends React.Component {
  render() {

    return (
      <div style={{
        position: `${datosWhatsApp.whatsApp.position}`,
        right: `${datosWhatsApp.whatsApp.right}`,
        bottom: `${datosWhatsApp.whatsApp.bottom}`,
        zIndex: `${datosWhatsApp.whatsApp.zIndex}`
        }} >

        <a href={datosWhatsApp.whatsApp.href} target="_blank">
          <i className="bi bi-whatsapp " style={{
            color: `${datosWhatsApp.whatsApp.color}`,
            fontSize: `${datosWhatsApp.whatsApp.fontSize}`,
            backgroundColor: `${datosWhatsApp.whatsApp.backgroundColor}`,
            display: `${datosWhatsApp.whatsApp.displayFlex}`
            }} >
          </i>
        </a>



      </div>

  )

  }
}

export default WhatsApp;


