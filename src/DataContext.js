import {useState, useEffect, createContext} from 'react';//

export const DataContext = createContext();

export const DataProvider = ( { children }) => {


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

    <DataContext.Provider value={{configuracion, setTodos}}>

      { children }
    </DataContext.Provider>

  )


}


