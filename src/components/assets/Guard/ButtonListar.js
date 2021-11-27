import React from 'react'
import { Link } from "react-router-dom";
export const ButtonListar = () => {
    return(
    <li class="nav-item active mx-2">
        <Link class ="btn btn-warning" type="button"  to='/listar'><i class='bx bxs-add-to-queue'></i> LISTAR </Link>
    </li>
    )
  }
