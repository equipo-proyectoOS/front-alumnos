import React, {useState,useEffect}  from 'react'
import { Link } from "react-router-dom";

import { ButtonLogin} from '../assets/Guard/ButtonLogin'

import { ButtonCerrarSesion } from '../assets/Guard/ButtonCerrarSesion';

import { ButtonListar } from '../assets/Guard/ButtonListar';

import { ButtonRegister } from '../assets/Guard/ButtonRegister';





const Navbar = (props) => {

  const {listProf} = props
  const [Login, setLogin] = useState(null);


  useEffect(() => {
    const usuarioT = localStorage.getItem('loggedUser')
    if (usuarioT){
			const user = JSON.parse(usuarioT)
			setLogin(user)
		}
	}, [])



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
            <li class="nav-item active mx-2" key = {'1'}> 
            
                <Link class ="btn btn-warning" type="button" to= {{
                        pathname:'/',
                        datos:{profesionales: listProf}
                    }}
                    >INICIO
                    </Link>
              </li>
                  {
                    Login
                    ?<ButtonListar/>
                    :<ButtonLogin/>
                    
                  }
                  {
                    Login
                    ?<ButtonCerrarSesion/>
                    :<ButtonRegister/>
                    
                  }
              
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
