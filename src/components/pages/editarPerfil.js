import React, { useEffect,useState } from 'react'

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

const Editar =  (datosUnicos) => {

	//const [listatadoCompleto, setListadoCompleto] = useState ([])

	const mostrarid =  datosUnicos.location.datos.profesionales._id;

			const url = "https://ipf-profesionales.herokuapp.com/api/profesionales/"+mostrarid;

				const [stateProfesionales, setStateProfesionales] = useState([])

				const fetchDataProfesionales = async () => {
					try {
						const peticion = await fetch(url)
						const res = await peticion.json()
						console.log(res)
						setStateProfesionales(res)
					} catch (error) {console.log(error)}
				}

				useEffect(() => {
					fetchDataProfesionales()
				},[])


				useEffect(()=>{
					const url = "https://ipf-profesionales.herokuapp.com/api/profesionales/"+mostrarid;
					fetch(url)
						.then(response => response.json())
						.then(data => mostrarData(data))
						.catch(error => console.log(error))
				
					const mostrarData = (data) => {
						//console.log(data)
						let body = ""
						
							body += `<div>
							<div>
							<h5>${data.personal_info.fullname}</h5>
							</div>
							</div>`
				
						
						document.getElementById('data').innerHTML = body
					}
				  },[]);
			
				
			/* const [listatadoCompleto, setListadoCompleto] = useState ([])

			useEffect(() => {
				//console.log(props + ' Home')
				if(props.location.datos){setListadoCompleto(props.location.datos.profesionales)}
				else{setListadoCompleto([])}
		
				
			}, [props]) */
		
    return (
        <div class="limiter">
		<div class="container-login100" style={{ backgroundImage: `url(${imagen})` }}>
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54" id= "data">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						DETALLE
					</span>
					<div id= "data"  >
					<div>
 
					</div>
					</div>
					{/* {
                    mostrarid.length > 0 ? mostrarid.map(item => {
                        
                        return(
                            <div class="col-md-3 col-sm-6" >
                                <div class="card card-block mx-3 mb-5">
                                <img src="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/foto-de-perfil-para-instagram-1024x538.png" alt="Perfil"/>
                                <h5 class="card-title mt-3 mb-3"><p>Hola <b>{item.personal_info.fullname}</b></p></h5>
                            </div>
							</div>
                        )
                    }):  
					<h5 class="card-title mt-3 mb-3"><p>Hola <b>:( :( :(</b></p></h5>
                } */}
				</form>
			</div>
		</div>
	</div>
    )

}

export default Editar