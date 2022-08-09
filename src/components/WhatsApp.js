import React, {useState, useEffect} from 'react';
import './styles/whatsApp.scss';
// import datosWhatsApp from '../data/configuracion.json';



function WhatsApp() {

  const url = "https://benjumeacarlos981.github.io/multicarga/original.json";
  const [datosWhatsApp, setTodos] = useState()

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
        { !datosWhatsApp ? 'Cargando...' :
          <div className="divWhatsApp">
            <a href={datosWhatsApp.whatsApp.href} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-whatsapp " style={{
                color: `${datosWhatsApp.whatsApp.color}`,
                backgroundColor: `${datosWhatsApp.whatsApp.backgroundColor}`

                }} >
              </i>
            </a>
          </div>
        }
      </>

  )

}

export default WhatsApp;


