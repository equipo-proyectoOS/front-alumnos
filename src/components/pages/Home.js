//import animals from '../../assets/slider-01.jpg'
import React, {useEffect, useState} from 'react';
import imagen from "../../Login_v4/images/bg-01.jpg"
import '../assets/css/tarjetas.css';

import { Filtro } from '../js/Filtro';





const Home = (props) => {
        
    const [listatadoCompleto, setListadoCompleto] = useState ([])

    useEffect(() => {
        console.log(props + ' Home')
        if(props.location.datos){setListadoCompleto(props.location.datos.profesionales)}
        else{setListadoCompleto([])}

        
    }, [props])

    return (
        
    <div class="container-login100" style={{ backgroundImage: `url(${imagen})` }}>
       <Filtro/>
        <div class="container mt-2">
        
            <div class="row" id="data">
                {
                    listatadoCompleto.length > 0 ? listatadoCompleto.map(item => {
                        let fecha = new Date(item.personal_info.birthdate)
                        let fechaConvertida = fecha.toLocaleDateString()
                        return(
                            <div class="col-md-3 col-sm-6" >
                                <div class="card card-block mx-3 mb-5">
                                <img src="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/foto-de-perfil-para-instagram-1024x538.png" alt="Perfil"/>
                                <h5 class="card-title mt-3 mb-3">{item.personal_info.fullname}</h5>
                                {/* <p>Cumpleaños: <b>{item.personal_info.birthdate.substring(0,10)}</b></p> */} 
                                <p>Cumpleaños: <b>{fechaConvertida}</b></p>
                                <p>DNI: <b>{item.personal_info.dni}</b></p> 
                                <p>Genero: <b>{item.personal_info.gender}</b></p> 
                                <p>Pais: <b>{item.personal_info.country}</b></p>
                                <p>Provincia: <b>{item.personal_info.state}</b></p>
                                <p>Direccion: <b>{item.personal_info.address}</b></p> 
                                <p>Hobby: <b>{item.personal_info.hobbies}</b></p>
                                <h5 class="card-title mt-3 mb-3">Contacto</h5> 
                                <p>Telefono: <b>{item.contact_info.phone}</b></p> 
                                <p>Email: <b>{item.contact_info.email}</b></p> 
                                <p>Perfil: <b>{item.contact_info.social_media}</b></p> 
                                <h5 class="card-title mt-3 mb-3">Informacion Academica</h5> 
                                <p>Primaria: <b>{item.academic_info.primary}</b></p> 
                                <p>Secundaria: <b>{item.academic_info.secondary}</b></p>
                                <p>Universidad: <b>{item.academic_info.tertiary}</b></p> 
                                
                                    { 
                                    item.academic_info.certifications.length > 0 ? 
                                    item.academic_info.certifications.map(elem=><p>{elem}</p>) : <p>Titulos: <b>no existe</b></p>
                                    }  
                                <h5 class="card-title mt-3 mb-3">Informacion Profesional</h5>
                                <p>Conocimientos: <b>{item.professional_info.summary}</b></p>  
                                <p>Experiencia Laboral: <b>{item.professional_info.work_exp}</b></p>
                                <p>Habilidades: <b>{item.professional_info.skills}</b></p>
                                {/* <p>Lenguajes: <b>{item.professional_info.languages}</b></p> */} 
                                <p>Idiomas: </p>
                                {
                                    item.professional_info.languages.length > 0 ? item.professional_info.languages.map(elem => <p><b>{elem}</b></p>) : <p>Idiomas: No especificado</p>
                                }
                                </div>
                            </div>
                        )
                    }): <h1 style={{margin:'auto', color:'white'}}><b>NO SE HAN CARGADO LOS DATOS</b></h1>
                        
                }
                    
                             
                         
            </div>    
        </div>
    </div>  

    )
}

export default Home;

