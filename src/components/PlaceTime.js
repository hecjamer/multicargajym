import React, {useContext, useState, useEffect} from 'react';
import './styles/placeTime.scss'
// import Placetime from '../data/configuracion.json'
import { DataContext } from '../DataContext';


function PlaceTime() {
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
          <div className="container-fluid placeTime-contenedor-fluid">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-ms-12 col-left">
                <img src={require(`../images/${configuracion.PlaceTime.url}`)} alt="" />
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-ms-12 col-right">
              <h2>{configuracion.PlaceTime.titulo}</h2>
              <p>{configuracion.PlaceTime.detalle}</p>
              <a href="https://es.wikipedia.org/wiki/Honolulu" className="btn btn-outline-light btn-sm">Conocenos Más</a>
              </div>
            </div>
          </div>
        }
      </>

    )

}

export default PlaceTime;


