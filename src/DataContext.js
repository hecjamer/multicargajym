import {useState, useEffect, createContext} from 'react';//

export const DataContext = createContext();

export const DataProvider = ( { children }) => {


    const url = "https://benjumeacarlos981.github.io/multicarga/configuracion.json";

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
      <DataContext.Provider value={{configuracion, setTodos}}>
        { children }
      </DataContext.Provider>
      }
    </>
  )


}


