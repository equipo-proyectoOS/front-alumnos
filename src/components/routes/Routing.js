import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Login from '../pages/Login';
import Home from "../pages/Home";
import Registro from"../pages/Registro";
import Listar from"../pages/AgregarProf";
import Perfil from '../pages/VerPerfil';
/* import { Filtro } from '../js/Filtro'; */
import PrivateRoute from '../js/PrivateRoute';
import PrivateRoute2 from '../js/PrivateRoute2';

export const Routing = () => {
    return(
      <Switch>
        <Route exact path="/" component={Home}/>
        <PrivateRoute exact path="/login" component={Login}/>
        <PrivateRoute exact path="/registro" component={Registro}/>
        <PrivateRoute2 exact path="/listar" component={Listar}/>
        <Route exact path="/perfil/:proid" component={Perfil}/>
        {/* <Route exact path="/filtro" component={Filtro}/> */}
      </Switch>
    )
  }
