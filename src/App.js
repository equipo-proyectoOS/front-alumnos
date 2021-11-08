//import './App.css';
import './bootstrap/css/bootstrap.min.css';
import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './components/pages/Login';
import Home from "./components/pages/Home";
import Registro from"./components/pages/Registro";
import Listar from"./components/pages/AgregarProf";
import Editar from './components/pages/editarPerfil';
import { Filtro } from './components/js/Filtro';
import PrivateRoute from './components/js/PrivateRoute';
import PrivateRoute2 from './components/js/PrivateRoute2';



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

  const Routing = () => {
    return(
      <Switch>
        <Route exact path="/" component={Home}/>
        <PrivateRoute exact path="/login" component={Login}/>
        <PrivateRoute exact path="/registro" component={Registro}/>
        <PrivateRoute2 exact path="/listar" component={Listar}/>
        <Route exact path="/editar/:proid" component={Editar}/>
        <Route exact path="/filtro" component={Filtro}/>
      </Switch>
    )
  }
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