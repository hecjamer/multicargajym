import React, {useContext} from 'react';
import './styles/telefonoApp.scss';
import { DataContext } from '../DataContext';

function TelefonoApp() {

  const { configuracion } = useContext( DataContext );

    return (
      <div className="divTelefonoApp">
        <a href={`tel:${configuracion.contacto.celular}`} target="_blank" rel="noopener noreferrer">
          <i className="fi-telephone " style={{
            color: `${configuracion.telefonoApp.color}`,
            backgroundColor: `${configuracion.telefonoApp.backgroundColor}`

            }} >
          </i>
        </a>
      </div>
    )

}

export default TelefonoApp;


