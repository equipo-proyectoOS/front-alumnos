import React, {useState,useEffect} from 'react'


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
import imagen from "../../Login_v4/images/bg-01.jpg"
import loginServicios from '../js/login'
//import login from '../js/login';

const Login = () => {

	//const[errorMessage, setErrorMessage] = useState (null)

	const [email,setemail] = useState('')
	const [password,setPassword] = useState('') 
	const [user, setUser] = useState(null);

	useEffect(() => {
	}, [])

	useEffect(()=>{
		const loggeUserJSON = window.localStorage.getItem('loggdUser')
		if (loggeUserJSON){
			const user = JSON.parse(loggeUserJSON)
			setUser(user)
			console.log(user)
		}
	},[])

	const handleSubmit = async (event) =>{
		event.preventDefault()
		//console.log(email, password)
		try{
			//console.log(email, password, "try")
			const user = await loginServicios.login({
				email,
				password
				
			})

			window.localStorage.setItem(
				'loggedUser', JSON.stringify(user)
			)

			console.log(user)
			setUser(user);
			setemail('');
			setPassword('');
			//window.location.href="/home"
			
		}catch(e){
			
			console.log("Error",e)
		}
	}

	const RenderLogin = () => (
		<button class="login100-form-btn">
		INICIAR
	</button>
	)

	const Renderlistar = () => (
		<button class="login100-form-btn">
		LISTAR
	</button>
	)

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
							{
								
								user
								?Renderlistar()
								:RenderLogin()
							}
							
						</div>
						 {/* <Notification message={errorMessage}/>  */}
					</div>
					
				</form>
			</div>
		</div>
	</div>
    )

}

export default Login