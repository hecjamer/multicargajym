import React, {useContext, useState, useEffect} from 'react';
// import './styles/CintaContacto.scss';
import './styles/redesSociales.scss';
// import contacto from '../data/configuracion.json'

// import * as ReactBootStrap from "react-bootstrap"; // extension de ReactBootStrap
import { DataContext } from '../DataContext';

function RedesSociales() {
  const { configuracion } = useContext( DataContext );

  // const url = "https://benjumeacarlos981.github.io/multicarga/original.json";
  // const [configuracion, setTodos] = useState()

  // const fetchApi = async () => {
  //   const response = await fetch(url)
  //   const responseJSON = await response.json()
  //   setTodos(responseJSON)
  // }

  // useEffect(() => {
  //   fetchApi();

  // }, [])


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

