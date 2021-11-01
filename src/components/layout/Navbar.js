import React, {useState,useEffect}  from 'react'
import { Link } from "react-router-dom";
import login from '../js/login';
//import '../pages/Login';
//import {user} from '../pages/Login';
//import {Login, user} from '../pages/Login'

import Login from  '../pages/Login'




const Navbar = () => {

  const [Login, setLogin] = useState(null);

  useEffect(() => {
    const usuarioT = localStorage.getItem('loggedUser')
    if (usuarioT){
			const user = JSON.parse(usuarioT)
			setLogin(user)
		}
	}, [])

  const logaut = () => {
		window.localStorage.removeItem('loggedUser')
    window.location.href="/login"
	}

  const renderLoginButton = () => {
   return(
    <Link class ="btn btn-warning" type="button"  to='/login'><i class='bx bxs-user'></i> INICAR SESION </Link>
   )
}

const renderRegisterButton = () => {
   return( 
<Link class ="btn btn-warning" type="button"  to='/registro'><i class='bx bxs-user'></i> REGISTRO </Link>
)
}

const renderlistarButton = () => {
  return(
  <Link class ="btn btn-warning" type="button"  to='/listar'><i class='bx bxs-add-to-queue'></i> LISTAR </Link>
  )
}

const renderEditarButton = () => {
  return( 
  <Link class ="btn btn-warning" type="button"  to='/editar'><i class='bx bxs-add-to-queue'></i> EDITAR </Link>
  )
}

const renderCerrarSesion = () =>
{
  return ( 
  <button class ="btn btn-warning"  onClick = {logaut}><i class='bx bxs-log-out'></i>
    CERRAR SESION
  </button>
  )
}

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class="container">
          <a class="navbar-brand" href="#">Profesionales</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active mx-2"> 
                <Link class ="btn btn-warning" type="button" to='/home'>INICIO</Link>
              </li>
              <li class="nav-item active mx-2">
                
                {
                  Login
                ?renderlistarButton() 
                :renderLoginButton()
                };
              </li>
               <li class="nav-item active mx-2">
                  {
                    Login
                    ?renderCerrarSesion()
                    :renderRegisterButton()
                  }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
