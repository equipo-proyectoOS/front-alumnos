//import './App.css';
import './bootstrap/css/bootstrap.min.css';
import {useEffect, useState} from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import { Routing } from './components/routes/Routing'



function App() {
  
  const url = "https://ipf-profesionales.herokuapp.com/api/profesionales/";

  const [stateProfesionales, setStateProfesionales] = useState([])

  const fetchDataProfesionales = async () => {
      try {
          const peticion = await fetch(url)
          const res = await peticion.json()
          //console.log(res)
          setStateProfesionales(res)
      } catch (error) {console.log(error)}
  }

  useEffect(() => {
      fetchDataProfesionales()
  },[])

  
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