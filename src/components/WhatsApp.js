import React, {useContext, useState, useEffect} from 'react';
import './styles/whatsApp.scss';
// import datosWhatsApp from '../data/configuracion.json';
import { DataContext } from '../DataContext';



function WhatsApp() {

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
          <div className="divWhatsApp">
            <a href={configuracion.whatsApp.href} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp " style={{
                color: `${configuracion.whatsApp.color}`,
                backgroundColor: `${configuracion.whatsApp.backgroundColor}`

                }} >
              </i>
            </a>
          </div>
        }
      </>

  )

}

export default WhatsApp;


