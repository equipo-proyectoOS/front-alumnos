import React,{useState} from 'react'

import '../../Login_v4/vendor/bootstrap/css/bootstrap.min.css';
import '../../Login_v4/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../../Login_v4/fonts/iconic/css/material-design-iconic-font.min.css';
import '../../Login_v4/vendor/animate/animate.css';
import '../../Login_v4/vendor/css-hamburgers/hamburgers.min.css';
import '../../Login_v4/vendor/css-hamburgers/hamburgers.min.css';
import '../../Login_v4/vendor/animsition/css/animsition.min.css';
import '../../Login_v4/vendor/select2/select2.min.css';
import '../../Login_v4/vendor/daterangepicker/daterangepicker.css';
import '../../Login_v4/css/util.css';
import '../../Login_v4/css/main.css';

import registerServicios from '../js/Register'

import imagen from "../../Login_v4/images/bg-01.jpg"

const Login = () => {

	const[errorMessage, setErrorMessage] = useState (null)

	const [email,setemail] = useState('')
	const [password,setPassword] = useState('') 
	const [rol, setRol] = useState('');
	const [username, setUser] = useState('');
	

	const handleSubmit = async (event) =>{
		event.preventDefault()
		
		try{
			
			const user = await registerServicios.registro({
				email,
				password,
				rol,
				username
				
			})

			console.log(user)
			setUser('');
			setemail('');
			setPassword('');
			setRol('')
			window.location.href="/login"
			
		}catch(e){
			setErrorMessage('Ese Usuario ya existe')
			setTimeout(() => {
					setErrorMessage(null)
			}, 3000)
			console.log("Error",e)
		}
	}

	/* const EnviarDatosPost = () => {
        const objt = {
					email: "correoxd12@gmail.com",
					password: "123456",
					rol: "Admin",
                  	nombre_usuario: "Enzo"  
        }
        console.log(objt)
        let url = "http://localhost:4000/usuarios";
        https://ipf-profesionales.herokuapp.com/api/register
        fetch(url,{
            method: "POST",
            body: JSON.stringify(objt),
            headers:{
                'Content-Type' : 'application/json'
            }
            
        }).then(response => response.json())
        .catch(error => console.log('No Funciona',error))
        .then(response => console.log('funciona', response))
        
    } */

    return (
        <div class="limiter">
		<div class="container-login100" style={{ backgroundImage: `url(${imagen})` }}>
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form" onSubmit={handleSubmit}>
					<span class="login100-form-title p-b-49">
						REGISTRO
					</span>

					<div class="wrap-input100 validate-input m-b-23" data-validate = "El correo es requerido">
						<span class="label-input100">Corro Elecronico</span>
						<input class="input100" type="text" 
						name="email" 
						value= {email} 
						onChange={({target}) => setemail(target.value)} 
						placeholder="Correo Electronico"/>
						<span class="focus-input100" data-symbol="&#xf206;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Contraseña es requerido">
						<span class="label-input100">Contraseña</span>
						<input class="input100" 
						type="password" 
						name="password" 
						placeholder="Contraseña"
						value= {password}
						onChange={({target}) => setPassword(target.value)}/>
						<span class="focus-input100" data-symbol="&#xf190;"></span>
					</div> 

					<div class="wrap-input100 validate-input m-b-23" data-validate = "El Rol es requerido">
						<span class="label-input100">Rol</span>
						<input class="input100" 
						type="text" 
						name="rol" 
						value= {rol} 
						onChange={({target}) => setRol(target.value)} 
						placeholder="Rol"/>
						<span class="focus-input100" data-symbol="&#xf206;"></span>
					</div>

					<div class="wrap-input100 validate-input m-b-23" data-validate = "Usuario es requerido">
						<span class="label-input100">Nombre de Usuario</span>
						<input class="input100" 
						type="text" 
						name="username" 
						value= {username} 
						onChange={({target}) => setUser(target.value)} 
						placeholder="Nombre de Usuario"/>
						<span class="focus-input100" data-symbol="&#xf206;"></span>
					</div>
					
					<br></br>
					
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn">
								REGISTRARSE
							</button>
						</div>
					</div>
					<p>{errorMessage}</p>
				</form>
			</div>
		</div>
	</div>
    )

}

export default Login