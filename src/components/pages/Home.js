//import animals from '../../assets/slider-01.jpg'
import React, {useEffect} from 'react';
import imagen from "../../Login_v4/images/bg-01.jpg"
import perfil from "../assets/image/perfil.jpg";
import '../assets/css/tarjetas.css';


const Home = () => {

    useEffect(()=>{
        let url = "https://equipo-server.herokuapp.com/estudiante";
        fetch(url)
            .then(response => response.json())
            .then(data => mostrarData(data))
            .catch(error => console.log(error))
    
        const mostrarData = (data) => {
            console.log(data)
            let body = ""
            
            for (let i = 0; i < data.length; i++) {
                
                body += `<div>
                <img src="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/foto-de-perfil-para-instagram-1024x538.png" alt="Perfil"/>
                <h5 class="card-title mt-3 mb-3">${data[i].datos_personales.nombre_apellido}</h5>
                <p>Correo: <b>${data[i].datos_personales.correo}</b></p> 
                <p>DNI: <b>${data[i].datos_personales.dni}</b></p> 
                <p>Edad: <b>${data[i].datos_personales.edad}</b></p> 
                <p>Ciudad: <b>${data[i].datos_personales.direccion.ciudad}</b></p>
                <p>Calle: <b>${data[i].datos_personales.direccion.calle}</b></p> 
                </div>`
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

    {/* <td>${data[i].datos_personales.numero_telefono}</td>
                <td>${data[i].datos_personales.nombre_apellido}</td>
                <td>${data[i].datos_personales.edad}</td> */}
  
    return (
    <div class="container-login100" style={{ backgroundImage: `url(${imagen})` }}>
        <div class="container mt-2">
    
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="card card-block" id="data">
               
                    </div>
                </div>
            </div>    
        </div>
    </div>  

    )
}

export default Home;
