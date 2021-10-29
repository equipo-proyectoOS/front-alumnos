//import './App.css';
import './bootstrap/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './components/pages/Login';
import Home from "./components/pages/Home";
import Posts from "./components/pages/Posts";
import Users from "./components/pages/Users";
import Registro from"./components/pages/Registro";
import Listar from"./components/pages/AgregarProf";
import Editar from './components/pages/editarPerfil';
import { Filtro } from './components/js/Filtro';





function App() {
  
  const Routing = () => {
  
   
  
    return(
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/posts" component={Posts}/>
        <Route exact path="/users" component={Users}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/registro" component={Registro}/>
        <Route exact path="/listar" component={Listar}/>
        <Route exact path="/editar" component={Editar}/>
        <Route exact path="/filtro" component={Filtro}/>
      </Switch>
    )
  }
    return (
  <>
  
      
      <Router>
        <Navbar/>
        <Routing/>
      </Router>
  
  </>
  
    )
  }

export default App;