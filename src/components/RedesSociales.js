import React, {useContext} from 'react';
// import './styles/CintaContacto.scss';
import './styles/redesSociales.scss';

// import * as ReactBootStrap from "react-bootstrap"; // extension de ReactBootStrap
import { DataContext } from '../DataContext';

function RedesSociales() {
  const { configuracion } = useContext( DataContext );
    return (
      <>
        { !configuracion ? 'Cargando...' :
          <div className="row redesSociales-container">
            {configuracion.contacto.redesSociales.map(redes => {
              return (
                <div className={redes.col} key={redes.id}>
                  <a href={redes.href} className={redes.className}>""</a>
                </div>
              )
            })}
          </div>
        }
      </>
    )

}

export default RedesSociales;

