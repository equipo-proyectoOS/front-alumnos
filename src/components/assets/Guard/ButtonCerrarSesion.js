import React from 'react'

export const ButtonCerrarSesion = () => {

  

 
  //Usamos RemoveItem para eliminar el token del localStorage
  const logaut = () => {
		window.localStorage.removeItem('loggedUser')
    window.location.href="/login"
	}

    return (
      <li class="nav-item active mx-2">
        <button class ="btn btn-warning"  onClick = {logaut}><i class='bx bxs-log-out'></i>
          CERRAR SESION
        </button>
      </li>
    )
}


