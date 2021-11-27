import React, {useState,useEffect} from 'react'



import imagen from "../../Login_v4/images/bg-01.jpg"
import loginServicios from '../API/consultaLogin'



const Login = () => {

	//Creamos un manejador de estado para los mensajes...
	const[errorMessage, setErrorMessage] = useState (null)

	//Creamos lo manejadores de estado.
	const [email,setemail] = useState('')
	const [password,setPassword] = useState('') 
	const [user, setUser] = useState(null);

	

	if (localStorage.getItem(null)){
		setUser('')
		console.log(user + " se limipo ")
	}

	const handleSubmit = async (event) =>{

		
		event.preventDefault()	
		
		
		try{	

			//le pasamos las credenciales
			const user = await loginServicios.buscador({
				email,
				password
				
			})

			//guardarmos la informacion en el localStorage
			window.localStorage.setItem(
				//Lo guardamos comos string
				'loggedUser', JSON.stringify(user)
			)
			//Guardamos la informacion
			setUser(user);

			//reseteamos los estados
			setemail('');
			setPassword('');
			//Redireccionamos a la ruta home
			window.location.href="/"
			

			//Si hay error se envia un mensaje que dura 3s.
		}catch(e){
			setErrorMessage('Usuario o Contraseña incorrecta')
			setTimeout(() => {
					setErrorMessage(null)
			}, 3000)
			console.log("Error",e)
		}
	}

	

    return (
        <div class="limiter">
		<div class="container-login100" style={{ backgroundImage: `url(${imagen})` }}>
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form" onSubmit={handleSubmit}>
					<span class="login100-form-title p-b-49">
						INICIAR SESIÓN
					</span>

					<div class="wrap-input100 validate-input m-b-23" data-validate = "Usuario es requerido">
						<span class="label-input100">Nombre de Usuario</span>
						<input class="input100" 
						type="text" 
						value= {email}
						name="email" 
						placeholder="Nombre de Usuario"
						onChange={({target}) => setemail(target.value)}
						/>
						<span class="focus-input100" data-symbol="&#xf206;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Contraseña es requerido">
						<span class="label-input100">Contraseña</span>
						<input class="input100" 
						type="password" 
						name="password" 
						placeholder="Contraseña"
						value= {password}
						onChange={({target}) => setPassword(target.value)}
						/>
						<span class="focus-input100" data-symbol="&#xf190;"></span>
					</div> <br></br>
					
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn">INICIAR</button>
						</div>
						 <div>
							 <br/>
						 <p style={{color:"red"}}>{errorMessage}</p>
						 </div>
					</div>
					
				</form>
			</div>
		</div>
	</div>
    )

}

export default Login;