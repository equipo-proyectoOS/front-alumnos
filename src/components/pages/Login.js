import React, {useState,useEffect} from 'react'



import imagen from "../../Login_v4/images/bg-01.jpg"
import loginServicios from '../API/consultaLogin'



const Login = () => {

	const[errorMessage, setErrorMessage] = useState (null)

	const [email,setemail] = useState('')
	const [password,setPassword] = useState('') 
	const [user, setUser] = useState(null);

	useEffect(()=>{
		const loggeUserJSON = window.localStorage.getItem('loggedUser')
		if (loggeUserJSON){
			const user = JSON.parse(loggeUserJSON)
			setUser(user)
			
			
		}
	},[])

	if (localStorage.getItem(null)){
		setUser('')
		console.log(user + " se limipo ")
	}

	const handleSubmit = async (event) =>{
		event.preventDefault()		
		try{	
			const user = await loginServicios.buscador({
				email,
				password
				
			})
			window.localStorage.setItem(
				'loggedUser', JSON.stringify(user)
			)
			setUser(user);
			setemail('');
			setPassword('');
			window.location.href="/"
			
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