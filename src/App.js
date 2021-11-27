//import './App.css';
import './bootstrap/css/bootstrap.min.css';
import {useEffect, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import { Routing } from './components/routes/Routing'



function App() {
  
  //creamos una const de la url de nuestra api.
  const url = "https://ipf-profesionales.herokuapp.com/api/profesionales/";

  //Cacemos un setState para guardar el array que nos devuelve la api
  const [stateProfesionales, setStateProfesionales] = useState([])

  //Creamos la función para consumir la api
  const fetchDataProfesionales = async () => {
      try {
          const peticion = await fetch(url)
          const res = await peticion.json()
          //console.log(res)
          setStateProfesionales(res)
      } catch (error) {console.log(error)}
  }

  //Ahora usamos el useEffect para ejecutar todo lo anterior
  useEffect(() => {
      fetchDataProfesionales()
  },[])

  

  //se envía como prop listAlumnos (stateProfesionales)
    return (
  <>
      <Router>
      <Navbar listProf={stateProfesionales ? stateProfesionales : null} />
        <Routing/>
      </Router>
  
  </>
  
    )
  }

export default App;