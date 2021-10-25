import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <a class="navbar-brand" href="#">
          Profesionales
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active mx-2">
              <Link class="btn btn-warning" type="button" to="/home">
                Home{" "}
              </Link>
            </li>
            <li class="nav-item active mx-2">
              <Link class="btn btn-warning" type="button" to="/login">
                <i class="bx bxs-user"></i> INICAR SESION{" "}
              </Link>
            </li>
            <li class="nav-item active mx-2">
              <Link class="btn btn-warning" type="button" to="/registro">
                <i class="bx bxs-user"></i> REGISTRO{" "}
              </Link>
            </li>
            <li class="nav-item active mx-2">
              <Link class="btn btn-warning" type="button" to="/añadir">
                <i class="bx bxs-user"></i> AÑADIR DATOS{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
