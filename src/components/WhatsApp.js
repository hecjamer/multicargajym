import React, {useContext} from 'react';
import './styles/whatsApp.scss';
import { DataContext } from '../DataContext';

function WhatsApp() {

  const { configuracion } = useContext( DataContext );

    return (
      <div className="divWhatsApp">
        <a href={configuracion.whatsApp.href} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp " style={{
            color: `${configuracion.whatsApp.color}`,
            backgroundColor: `${configuracion.whatsApp.backgroundColor}`

            }} >
          </i>
        </a>
      </div>
    )

}

export default WhatsApp;


