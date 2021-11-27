import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router';



import imagen from "../../Login_v4/images/bg-01.jpg"


const Editar =  () => {

      


	const {proid} = useParams();
	//console.log(proid)

    //Cacemos un setState para guardar el array que nos devuelve la api
	const [stateProfesionales, setStateProfesionales] = useState(null)

    //creamos una const de la url de nuestra api y le agregamos la id que traemos por parametros.
	const url = "https://ipf-profesionales.herokuapp.com/api/profesionales/"+proid;

      //Creamos la función para consumir la api
  const fetchDataProfesionales = async () => {
      try {
          const peticion = await fetch(url)
          const res = await peticion.json()
         // console.log(res)
          setStateProfesionales(res)
      } catch (error) {console.log(error)}
  }

    //Ahora usamos el useEffect para ejecutar todo lo anterior
  useEffect(() => {
      fetchDataProfesionales()
  },[proid])
	

  //verificamos que stateProfesionales no este vacio
	if(!stateProfesionales){
		return null;
	}

    //Manjamos las fechas para visualizarlo de forma correcta
	let fecha = new Date(stateProfesionales.personal_info.birthdate)
    let fechaConvertida = fecha.toLocaleDateString();
		
    return (
        <div class="limiter">
		<div class="container-login100" style={{ backgroundImage: `url(${imagen})` }}>
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54" id= "data">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
					{stateProfesionales.personal_info.fullname}
					</span>
					
                            <div >
                                <div >
                                {/* <p>Cumpleaños: <b>{stateProfesionales.personal_info.birthdate.substring(0,10)}</b></p> */} 
                                <p>Cumpleaños: <b>{fechaConvertida}</b></p>
                                <p>DNI: <b>{stateProfesionales.personal_info.dni}</b></p> 
                                <p>Genero: <b>{stateProfesionales.personal_info.gender}</b></p> 
                                <p>Pais: <b>{stateProfesionales.personal_info.country}</b></p>
                                <p>Provincia: <b>{stateProfesionales.personal_info.state}</b></p>
                                <p>Direccion: <b>{stateProfesionales.personal_info.address}</b></p> 
                                <p>Hobby: <b>{stateProfesionales.personal_info.hobbies}</b></p>
                                <h5 class="card-title mt-3 mb-3">Contacto</h5> 
                                <p>Telefono: <b>{stateProfesionales.contact_info.phone}</b></p> 
                                <p>Email: <b>{stateProfesionales.contact_info.email}</b></p> 
                                <p>Perfil: <b>{stateProfesionales.contact_info.social_media}</b></p> 
                                <h5 class="card-title mt-3 mb-3">Informacion Academica</h5> 
                                <p>Primaria: <b>{stateProfesionales.academic_info.primary}</b></p> 
                                <p>Secundaria: <b>{stateProfesionales.academic_info.secondary}</b></p>
                                <p>Universidad: <b>{stateProfesionales.academic_info.tertiary}</b></p> 
                                
                                    { 
                                    stateProfesionales.academic_info.certifications.length > 0 ? 
                                    stateProfesionales.academic_info.certifications.map(elem=><p>{elem}</p>) : <p>Titulos: <b>no existe</b></p>
                                    }  
                                <h5 class="card-title mt-3 mb-3">Informacion Profesional</h5>
                                <p>Conocimientos: <b>{stateProfesionales.professional_info.summary}</b></p>  
                                <p>Experiencia Laboral: <b>{stateProfesionales.professional_info.work_exp}</b></p>
                                <p>Habilidades: <b>{stateProfesionales.professional_info.skills}</b></p>
                                {/* <p>Lenguajes: <b>{stateProfesionales.professional_info.languages}</b></p> */} 
                                <p>Idiomas: </p>
                                {
                                    stateProfesionales.professional_info.languages.length > 0 ? stateProfesionales.professional_info.languages.map(elem => <p><b>{elem}</b></p>) : <p>Idiomas: No especificado</p>
                                }
                                <br/>
                                
                            </div>
							</div>
                       
                 
				</form>
			</div>
		</div>
	</div>
    )

}

export default Editar