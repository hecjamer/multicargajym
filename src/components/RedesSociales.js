import React, {useState, useEffect} from 'react';
// import './styles/CintaContacto.scss';
import './styles/redesSociales.scss';
// import contacto from '../data/configuracion.json'

// import * as ReactBootStrap from "react-bootstrap"; // extension de ReactBootStrap

function RedesSociales() {

  const url = "https://benjumeacarlos981.github.io/multicarga/original.json";
  const [contacto, setTodos] = useState()

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
        { !contacto ? 'Cargando...' :
          <div className="row redesSociales-container">
            {contacto.contacto.redesSociales.map(redes => {
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

