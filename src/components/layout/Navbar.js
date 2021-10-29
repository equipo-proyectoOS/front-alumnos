import React  from 'react'
import { Link } from "react-router-dom";
//import '../pages/Login';
//import {user} from '../pages/Login';





const Navbar = () => {

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
                {renderLoginButton()};
              </li>
              <li class="nav-item active mx-2">
              
								{renderRegisterButton()};
							
              </li>
              <li class="nav-item active mx-2">
              <Link class ="btn btn-warning" type="button"  to='/listar'><i class='bx bxs-add-to-queue'></i> LISTAR </Link>
              </li>
              {/* <li class="nav-item active mx-2">
              <Link class ="btn btn-warning" type="button"  to='/editar'><i class='bx bxs-add-to-queue'></i> EDITAR </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
