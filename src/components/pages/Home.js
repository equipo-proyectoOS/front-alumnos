//import animals from '../../assets/slider-01.jpg'
import React, {useEffect} from 'react';
import imagen from "../../Login_v4/images/bg-01.jpg"
import '../assets/css/tarjetas.css';


const Home = () => {

    useEffect(()=>{
        let url = "https://ipf-profesionales.herokuapp.com/api/profesionales/";
        fetch(url)
            .then(response => response.json())
            .then(data => mostrarData(data))
            .catch(error => console.log(error))
    
        const mostrarData = (data) => {
            //console.log(data)
            let body = ""
            
            for (let i = 0; i < data.length; i++) {
                body += `<div class="col-md-3 col-sm-6" >
                <div class="card card-block mx-2">
                    <img src="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/foto-de-perfil-para-instagram-1024x538.png" alt="Perfil"/>
                    <h5 class="card-title mt-3 mb-3">${data[i].personal_info.fullname}</h5>
                    <p>Cumpleaños: <b>${data[i].personal_info.birthdate}</b></p> 
                    <p>DNI: <b>${data[i].personal_info.dni}</b></p> 
                    <p>Genero: <b>${data[i].personal_info.gender}</b></p> 
                    <p>Pais: <b>${data[i].personal_info.country}</b></p>
                    <p>Correo: <b>${data[i].personal_info.address}</b></p> 
                    <p>Hobby: <b>${data[i].personal_info.hobbies}</b></p>
                    <h5 class="card-title mt-3 mb-3">Contacto</h5> 
                    <p>Telefono: <b>${data[i].contact_info.phone}</b></p> 
                    <p>Email: <b>${data[i].contact_info.email}</b></p> 
                    <p>Perfil: <b>${data[i].contact_info.social_media}</b></p> 
                    <h5 class="card-title mt-3 mb-3">Informacion Academica</h5> 
                    <p>Primaria: <b>${data[i].academic_info.primary}</b></p> 
                    <p>Secundaria: <b>${data[i].academic_info.secondary}</b></p>
                    <p>Universidad: <b>${data[i].academic_info.tertiary}</b></p> 
                    <p>titulos: <b>${data[i].academic_info.certifications}</b></p>  
                    <h5 class="card-title mt-3 mb-3">Informacion Profesional</h5>
                    <p>Conocimientos: <b>${data[i].professional_info.summary}</b></p>  
                    <p>Experiencia Laboral: <b>${data[i].professional_info.work_exp}</b></p>
                    <p>Habilidades: <b>${data[i].professional_info.skills}</b></p>
                    <p>Lenguajes: <b>${data[i].professional_info.lenguages}</b></p>     
                </div>
                </div>
                `
            }
            
            document.getElementById('data').innerHTML = body
        }
      },[]);

       
    
    const EnviarDatosPost = () => {
        const objt = {
                  nombre_usuario: "Enzo",
                  email: "correoxd12@gmail.com",
                  password: "123456"
        }
        console.log(objt)
        let url = "";
        //https://equipo-server.herokuapp.com/registro
        fetch(url,{
            method: "POST",
            body: JSON.stringify(objt),
            headers:{
                'Content-Type' : 'application/json'
            }
            
        }).then(response => response.json())
        .catch(error => console.log('No Funciona',error))
        .then(response => console.log('funciona', response))
        
    }
  
    return (
    <div class="container-login100" style={{ backgroundImage: `url(${imagen})` }}>
        <div class="container mt-2">
    
            <div class="row" id="data">
                <div>
                    <div>
                    </div>
                </div>
            </div>    
        </div>
    </div>  

    )
}

export default Home;
