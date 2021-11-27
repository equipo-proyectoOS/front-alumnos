import React from 'react'
import { Link } from "react-router-dom";
export const ButtonRegister = () => {
    return( 
        <li class="nav-item active mx-2">
            <Link class ="btn btn-warning" type="button"  to='/registro'><i class='bx bxs-user'></i> REGISTRO </Link>
        </li>
 )
 }
