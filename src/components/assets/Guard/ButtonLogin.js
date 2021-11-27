import React from 'react'

import { Link } from "react-router-dom";


export const ButtonLogin = () => {
    return(
        <div>
        <li class="nav-item active mx-2">
            <Link class ="btn btn-warning" type="button"  to='/login'><i class='bx bxs-user'></i> INICAR SESION </Link>
        </li>
        </div>
    )
 }
