import React, {useState, useEffect} from 'react';
import './styles/servicios.scss'
// import configuracion from '../data/configuracion.json'

function Servicios() {

  const url = "https://benjumeacarlos981.github.io/multicarga/original.json";
  const [configuracion, setTodos] = useState()

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
        { !configuracion ? 'Cargando...' :
              <div className="container-fluid servicios-contenedor-fluid">
                <div className="container container-servicios">
                    <div className="row">
                      <small>{configuracion.servicios.nombre1}</small>
                      <h2>{configuracion.servicios.nombre2}</h2>
                    </div>
                    <div className="row cont-card">
                          {configuracion.servicios.card.map(detalle => (
                            <div className="element-card" key={detalle.id}>
                              <div className="card-imagen" style={{backgroundImage: `url(${require(`../images/${detalle.imagen}`)})`}}></div>
                              <div className="element-card-text">
                                <h2 style={{fontSize: `${detalle.tamanoletraH2}`}}>{detalle.titulo}</h2>
                                <p style={{fontSize: `${detalle.tamanoletraP}`}}>{detalle.descripcion}</p>
                              </div>
                              <div className="card-footer">
                                {detalle.imgFooter.map(detalle => {
                                  return (
                                  <div key={detalle.id} className={detalle.class}>
                                    <i className={detalle.icono}></i>
                                    <h6>{detalle.nombre}</h6>
                                  </div>
                                  )
                                })}
                              </div>
                            </div>
                          ))}
                    </div>
                </div>
              </div>

        }
      </>


    )

}
export default Servicios;


