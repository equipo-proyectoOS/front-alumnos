import React, {useState, useEffect} from 'react'
import { useHistory} from "react-router-dom"



import imagen from "../../Login_v4/images/bg-01.jpg"

const Registro = () => {

	//Creamos el history y los estados
	const history= useHistory()

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');

	const [registrado, setRegistrado] = useState(null)

	//Creamos la función de registrarNuevoUser
	const RegistrarNuevoUser = async () => {

		let myHeaders = new Headers();

		myHeaders.append("Content-Type", "application/json")

		const raw = JSON.stringify({
			email: email,
			password: password,
			rol:"admin",
			username: username,
		})

		const options = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		}

		const postData = await fetch("https://ipf-profesionales.herokuapp.com/api/register", options)
		const res = postData.json()
		console.log(res)
		setRegistrado(true)

		
	}
	
	//Usamos el useEffect para detectar el cambio de estado y activar el history.
	useEffect(() => {
		//Con el método push le decimos hacia donde queremos que se dirija. 
		if(registrado){
			history.push('/login')
		}
	}, [registrado])

    return (
        <div class="limiter">
		<div class="container-login100" style={{ backgroundImage: `url(${imagen})` }}>
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						REGISTRO
					</span>

					<div class="wrap-input100 validate-input m-b-23" data-validate = "Usuario es requerido">
						<span class="label-input100">Nombre de Usuario</span>
						<input 
						value= {username}
						onChange={(e) => {setUsername(e.target.value)}}
						class="input100" 
						type="text" 
						name="username" 
						placeholder="Nombre de Usuario"/>
						<span class="focus-input100" data-symbol="&#xf206;"></span>
					</div>

					<div class="wrap-input100 validate-input m-b-23" data-validate = "Correo Electronico es requerido">
						<span class="label-input100">Corro Elecronico</span>
						<input 
						value= {email}
						onChange={(e) => {setEmail(e.target.value)}}
						class="input100" 
						type="text" 
						name="email" 
						placeholder="Correo Electronico"/>
						<span class="focus-input100" data-symbol="&#xf206;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Contraseña es requerido">
						<span class="label-input100">Contraseña</span>
						<input 
						value= {password}
						onChange={(e) => {setPassword(e.target.value)}}
						class="input100" 
						type="password" 
						name="pass" 
						placeholder="Contraseña"/>
						<span class="focus-input100" data-symbol="&#xf190;"></span>
					</div> <br></br>
					
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<button class="login100-form-btn"
							onClick={(e) => {RegistrarNuevoUser(e.preventDefault())}}>
								REGISTRARSE
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
    )

}

export default Registro