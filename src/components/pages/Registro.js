import React from "react";

import "../../Login_v4/vendor/bootstrap/css/bootstrap.min.css";
import "../../Login_v4/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../../Login_v4/fonts/iconic/css/material-design-iconic-font.min.css";
import "../../Login_v4/vendor/animate/animate.css";
import "../../Login_v4/vendor/css-hamburgers/hamburgers.min.css";
import "../../Login_v4/vendor/css-hamburgers/hamburgers.min.css";
import "../../Login_v4/vendor/animsition/css/animsition.min.css";
import "../../Login_v4/vendor/select2/select2.min.css";
import "../../Login_v4/vendor/daterangepicker/daterangepicker.css";
import "../../Login_v4/css/util.css";
import "../../Login_v4/css/main.css";

import imagen from "../../Login_v4/images/bg-01.jpg";

const Login = () => {
  return (
    <div class="limiter">
      <div
        class="container-login100"
        style={{ backgroundImage: `url(${imagen})` }}
      >

<div class="pt-5"><span class="login100-form-title p-b-49 text-light">INICIAR SESIÓN</span></div>
        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54 col-md-12 pl-0 pr-0 row">
          <div class="container pl-0 pr-0">
            <form class="login100-form validate-form ml-0 mr-0 pl-0 pr-0">
              

              <div class="col-md-12 row align-items-start">
                {/* columna 1 */}
                <div class="col-md-4">
                  {/* inicio datos personales */}
                  <span class="login100-form-title p-b-49">
                    Informacion Personal
                  </span>
                  <div
                    class="wrap-input100 validate-input m-b-23"
                    data-validate="Usuario es requerido"
                  >
                    <span class="label-input100">Nombre Completo</span>
                    <input
                      class="input100"
                      type="text"
                      name="nombre"
                      placeholder="Nombre completo"
                    />
                    <span class="focus-input100" data-symbol="&#xf206;"></span>
                  </div>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span class="label-input100">Fecha de Nacimiento</span>
                    <input
                      class="input100"
                      type="date"
                      name="date"
                      placeholder="Nacimiento"
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span class="label-input100">Numero de Documento</span>
                    <input
                      class="input100"
                      type="text"
                      name="dni"
                      placeholder="Nro de documento"
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span class="label-input100">Genero</span>
                    <input
                      class="input100"
                      type="text"
                      name="pass"
                      placeholder="Genero"
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span class="label-input100">Provincia</span>
                    <input
                      class="input100"
                      type="text"
                      name="provincia"
                      placeholder="Provincia"
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span class="label-input100">Pais</span>
                    <input
                      class="input100"
                      type="text"
                      name="pais"
                      placeholder="Pais"
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span class="label-input100">Direccion</span>
                    <input
                      class="input100"
                      type="text"
                      name="direccion"
                      placeholder="Direccion"
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span class="label-input100">Hobbys</span>
                    <input
                      class="input100"
                      type="text"
                      name="hobby"
                      placeholder="Hobbys"
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>
                  {/* fin de datos personales */}
                </div>

                {/* columna 2 */}
                <div class="col-md-4">
                  {/* inicio de datos segunda columna */}
                  <span class="login100-form-title p-b-49">
                    Informacion de Contacto
                  </span>
                  <div
                    class="wrap-input100 validate-input m-b-23"
                    data-validate="Usuario es requerido"
                  >
                    <span class="label-input100">Telefono</span>
                    <input
                      class="input100"
                      type="text"
                      name="username"
                      placeholder="Nombre de Usuario"
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span class="label-input100">E-mail</span>
                    <input
                      class="input100"
                      type="email"
                      name="email"
                      placeholder="E-mail"
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>

                  <br></br>
                  <br></br>

                  {/* fin info contacto */}

                  {/* info academica */}

                  <span class="login100-form-title p-b-49">
                    Informacion Academica
                  </span>
                  <div
                    class="wrap-input100 validate-input m-b-23"
                    data-validate="Usuario es requerido"
                  >
                    <span class="label-input100">Colegio secundario</span>
                    <input
                      class="input100"
                      type="text"
                      name="colegio"
                      placeholder="Colegio Secundario"
                    />
                    <span class="focus-input100" data-symbol=""></span>
                    <br></br>
                    <br></br>
                  </div>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span class="label-input100">Licenciatura</span>
                    <input
                      class="input100"
                      type="text"
                      name="lic"
                      placeholder="Licenciatura"
                    />
                    <span class="focus-input100" data-symbol=""></span>
                    <br></br>
                    <br></br>
                  </div>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span class="label-input100">certificados</span>
                    <input
                      class="input100"
                      type="text"
                      name="cert"
                      placeholder="Cetificados"
                    />
                    <span class="focus-input100" data-symbol=""></span>
                    <br></br>
                    <br></br>
                  </div>

                  {/* fin info academica */}
                  {/* fin de datos segunda columna */}
                </div>

                {/* columna 3 */}
                <div class="col-md-4">
                  {/* inicio tercer columna */}
                  <span class="login100-form-title p-b-49">
                    Informacion Profesional
                  </span>
                  <div
                    class="wrap-input100 validate-input m-b-23"
                    data-validate="Usuario es requerido"
                  >
                    <span class="label-input100">sumario</span>
                    <input
                      class="input100"
                      type="text"
                      name="sumario"
                      placeholder="Sumario"
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>

                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span class="label-input100">Experiencia laboral</span>
                    <input
                      class="input100"
                      type="text"
                      name="expLab"
                      placeholder="Experiencia Laboral"
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>

                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span class="label-input100">Habilidades</span>
                    <input
                      class="input100"
                      type="text"
                      name="habilidades"
                      placeholder="Habilidades"
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>

                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span class="label-input100">Lenguajes</span>
                    <input
                      class="input100"
                      type="text"
                      name="lenguajes"
                      placeholder="Lenguajes"
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  <div class="container-login100-form-btn">
                    <div class="wrap-login100-form-btn">
                      <div class="login100-form-bgbtn"></div>
                      <button class="login100-form-btn btn btn-warning">
                        REGISTRARSE
                      </button>
                    </div>
                  </div>
                  {/* fin tercer columna */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
