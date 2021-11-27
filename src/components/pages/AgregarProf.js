import React, {useState, useEffect} from "react";
import * as yup from 'yup';



import imagen from "../../Login_v4/images/bg-01.jpg";

const Listar = () => {

  //Creamos el esquema de yup.
  //Le asignamos a cada valor su propio tipo de dato.
  let schemaDatosProf = yup.object().shape({
    nombre:yup.string().required(),
    nacimiento: yup.string().required(),
    dni: yup.number().required().positive().integer(),
    genero: yup.string().required(),
    provincia: yup.string().required(),
    pais: yup.string().required(),
    direccion: yup.string().required(),
    hobbies: yup.string(),
    telefono: yup.string().required(),
    email: yup.string().email().required(),
    redes: yup.string(),
    primaria: yup.string().required(),
    secundaria: yup.string().required(),
    terciaria: yup.string().required(),
    universidad: yup.string().required(),
    certificado: yup.string(),
    sumario: yup.string().required(),
    exp: yup.string().required(),
    hablidades: yup.string().required(),
    idiomas: yup.string()
  })

  //creamos lo manejadores de estado.
  const[nombre, setNombre] = useState('')
  const[nacimiento, setNacimiento] = useState('')
  const[dni, setDni] = useState('')
  const[genero, setGenero] = useState('')
  const[provincia, setProvincia] = useState('')
  const[pais, setPais] = useState('')
  const[direccion, setDireccion] = useState('')
  const[hobbies, setHobbies] = useState('')
  const[telefono, setTelefono] = useState('')
  const[email, setEmail] = useState('')
  const[redes, setRedes] = useState('')
  const[primaria, setPrimaria] = useState('')
  const[secundaria, setSecundaria] = useState('')
  const[terciaria, setTerciaria] = useState('')
  const[universidad, setUniversidad] = useState('')
  const[certificado, setCertificado] = useState('')
  const[sumario, setSumario] = useState('')
  const[exp, setExp] = useState('')
  const[hablidades, setHabilidades] = useState('')
  const[idiomas, setIdiomas] = useState('')
  //
  const[enviar,  setEnviar] = useState(false);

//Ahora vamos a usar la función de validación propia de yup, /para ello vamos a colocar dentro del Hook useEffect .
useEffect(() => {
  schemaDatosProf.isValid({nombre, nacimiento, dni,genero,provincia, pais,direccion,hobbies,telefono,email,
    redes,primaria,secundaria,terciaria,universidad,certificado,sumario,exp,hablidades,idiomas})

    .then(
      (valid) => {
        if(valid){
          setEnviar(true);
        }else{
          setEnviar(false);
        }
      }
    )
},[nombre, nacimiento, dni,genero,provincia, pais,direccion,hobbies,telefono,email,
  redes,primaria,secundaria,terciaria,universidad,certificado,sumario,exp,hablidades,idiomas, schemaDatosProf])


  //Creamos la función de Registrar Nuevo Profesional
	const EnviarDatos = async () => {

		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json")


		const raw = JSON.stringify({
        "personal_info": {
        "fullname": nombre,
        "birthdate": nacimiento,
        "dni": dni,
        "gender": genero,
        "country": pais,
        "state": provincia,
        "address": direccion,
        "hobbies": hobbies
        },
        "contact_info": {
        "phone": telefono,
        "email": email,
        "social_media": [
            redes
        ]
        },
        "academic_info": {
        "primary": primaria,
        "secondary": secundaria,
        "tertiary": terciaria,
        "certifications": [ 
          certificado
        ]
        },
        "professional_info": {
        "summary": sumario,
        "work_exp": exp,
        "skills": hablidades,
        "languages": [
          idiomas
        ]
        }
        
			
		})

		const options = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		}

		const postData = await fetch("http://localhost:4000/usuarios", options)
		const res = postData.json()
		console.log(res)
		

		
	}


//Los onchange de cada input manejan los estados de las dependencias de yup.
  return (
    <div class="limiter">
      <div
        class="container-login100"
        style={{ backgroundImage: `url(${imagen})` }}
      >

<div class="pt-5"><span class="login100-form-title p-b-49 text-light">REGISTRAR NUEVO PROFESIONAL</span></div>
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
                      onChange={(e) =>{setNombre(e.target.value)}}
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
                      onChange={(e) =>{setNacimiento(e.target.value)}}
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
                      onChange={(e) =>{setDni(e.target.value)}}
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
                      onChange={(e) =>{setGenero(e.target.value)}}
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
                      onChange={(e) =>{setProvincia(e.target.value)}}
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
                      onChange={(e) =>{setPais(e.target.value)}}
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
                      onChange={(e) =>{setDireccion(e.target.value)}}
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
                      onChange={(e) =>{setHobbies(e.target.value)}}
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
                      onChange={(e) =>{setTelefono(e.target.value)}}
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
                      onChange={(e) =>{setEmail(e.target.value)}}
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span class="label-input100">Redes Sociales (link)</span>
                    <input
                      class="input100"
                      type="text"
                      name="redes"
                      placeholder="Link"
                      onChange={(e) =>{setRedes(e.target.value)}}
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
                    <span class="label-input100">Primaria</span>
                    <input
                     onChange={(e) =>{setPrimaria(e.target.value)}}
                      class="input100"
                      type="text"
                      name="escuela"
                      placeholder="Escuela"   
                    />
                    <span class="focus-input100" data-symbol=""></span>
                    
                  </div>
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
                      onChange={(e) =>{setSecundaria(e.target.value)}}
                    />
                    <span class="focus-input100" data-symbol=""></span>
                    
                  </div>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span class="label-input100">Terciaria</span>
                    <input
                      class="input100"
                      type="text"
                      name="lic"
                      placeholder="Terciaria"
                      onChange={(e) =>{setTerciaria(e.target.value)}}
                    />
                    <span class="focus-input100" data-symbol=""></span>
                    
                  </div>
                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span class="label-input100">Universidad</span>
                    <input
                      class="input100"
                      type="text"
                      name="lic"
                      placeholder="Licenciatura"
                      onChange={(e) =>{setUniversidad(e.target.value)}}
                    />
                    <span class="focus-input100" data-symbol=""></span>
                   
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
                      onChange={(e) =>{setCertificado(e.target.value)}}
                    />
                    <span class="focus-input100" data-symbol=""></span>
                    
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
                      onChange={(e) =>{setSumario(e.target.value)}}
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>
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
                      onChange={(e) =>{setExp(e.target.value)}}
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>
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
                      onChange={(e) =>{setHabilidades(e.target.value)}}
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>

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
                      onChange={(e) =>{setIdiomas(e.target.value)}}
                    />
                    <span class="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  <div class="container-login100-form-btn">
                    <div class="wrap-login100-form-btn">
                      <div class="login100-form-bgbtn"></div>
                      <button class="login100-form-btn btn btn-warning"
                      disabled= {enviar ? false : true}
                      onClick={(e) => {EnviarDatos(e.preventDefault())}}
                      >
                        {enviar ? "Enviar" : "Deshabilitado"}
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

export default Listar;