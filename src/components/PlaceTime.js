import React, {useState, useEffect} from 'react';
import './styles/placeTime.scss'
// import Placetime from '../data/configuracion.json'


function PlaceTime() {

  const url = "https://benjumeacarlos981.github.io/multicarga/original.json";
  const [Placetime, setTodos] = useState()

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
        { !Placetime ? 'Cargando...' :
          <div className="container-fluid placeTime-contenedor-fluid">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-ms-12 col-left">
                <img src={require(`../images/${Placetime.PlaceTime.url}`)} alt="" />
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-ms-12 col-right">
              <h2>{Placetime.PlaceTime.titulo}</h2>
              <p>{Placetime.PlaceTime.detalle}</p>
              <a href="https://es.wikipedia.org/wiki/Honolulu" className="btn btn-outline-light btn-sm">Conocenos Más</a>
              </div>
            </div>
          </div>
        }
      </>

    )

}

export default PlaceTime;


