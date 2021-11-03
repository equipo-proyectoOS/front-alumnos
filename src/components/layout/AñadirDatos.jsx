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
import styles from "../layout/AñadirDatos.module.css";

export default function AñadirDatos() {
  return (
    <div class="limiter">
        <div
          class="container-login100 container-fluid"
          style={{ backgroundImage: `url(${imagen})` }}
        >
          <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form class="login100-form validate-form">
              <div class="wrap-input100 validate-input m-b-23">
                <span class="login100-form-title p-b-49">
                  Información personal
                </span>
                <input
                  class={`input100 ${styles.input}`}
                  type="text"
                  name=""
                  placeholder="nombre completo"
                />
                <input
                  class="input100"
                  type="date"
                  name=""
                  placeholder="fecha de nacimiento"
                />
                <input class="input100" type="text" name="" placeholder="dni" />
                <input
                  class="input100"
                  type="text"
                  name=""
                  placeholder="genero"
                />
                <input
                  class="input100"
                  type="text"
                  name=""
                  placeholder="pais"
                />
                <input
                  class="input100"
                  type="text"
                  name=""
                  placeholder="provincia"
                />
                <input
                  class="input100"
                  type="text"
                  name=""
                  placeholder="direccion"
                />
                <input
                  class="input100"
                  type="text"
                  name=""
                  placeholder="aficiones"
                />
                <span class="focus-input100" data-symbol="&#xf206;"></span>
              </div>
              <div class="wrap-input100 validate-input m-b-23">
                <span class="login100-form-title p-b-49">
                  Informacion de contacto
                </span>
                <input
                  class="input100"
                  type="text"
                  name=""
                  placeholder="Telefono"
                />
                <input
                  class="input100"
                  type="text"
                  name=""
                  placeholder="Correo electronico"
                />
                <input
                  class="input100"
                  type="text"
                  name=""
                  placeholder="Redes Sociales"
                />
                <span class="focus-input100" data-symbol="&#xf206;"></span>
              </div>
              <div class="wrap-input100 validate-input m-b-23">
                <span class="login100-form-title p-b-49">
                  Informacion académica
                </span>
                <input
                  class="input100"
                  type="text"
                  name=""
                  placeholder="Nivel academico"
                />
                <input
                  class="input100"
                  type="text"
                  name=""
                  placeholder="Licenciaturas"
                />
                <input
                  class="input100"
                  type="text"
                  name=""
                  placeholder="Certificados"
                />
                <span class="focus-input100" data-symbol="&#xf206;"></span>
              </div>
              <div
                class="wrap-input100 validate-input m-b-23"
                data-validate="Usuario es requerido"
              >
                <span class="login100-form-title p-b-49">
                  Informacion profesional
                </span>
                <input
                  class="input100"
                  type="text"
                  name=""
                  placeholder="Resumen"
                />
                <input
                  class="input100"
                  type="text"
                  name=""
                  placeholder="Experiencia Laboral"
                />
                <input
                  class="input100"
                  type="text"
                  name=""
                  placeholder="Habilidades"
                />
                <input
                  class="input100"
                  type="text"
                  name=""
                  placeholder="Lenguajes"
                />
                <span class="focus-input100" data-symbol="&#xf206;"></span>
              </div>
            </form>
            <div class="container-login100-form-btn">
              <div class="wrap-login100-form-btn w-auto">
                <div class="login100-form-bgbtn"></div>
                <button class="login100-form-btn">Guardar Registro</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
