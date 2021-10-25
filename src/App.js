//import './App.css';
import "./bootstrap/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Posts from "./components/pages/Posts";
import Users from "./components/pages/Users";
import Registro from "./components/pages/Registro";
import AñadirDatos  from "./components/layout/AñadirDatos";
// import { useState } from "react";


function App() {
  // const [usuario, setUsuario] = useState({campo: '', valido: null});
  // const [password, setPassword] = useState({campo: '', valido: null});

  const Routing = () => {
    return (
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/añadir" component={AñadirDatos} />
      </Switch>
    );
  };
  return (
    <>
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </>
  );
}

export default App;
