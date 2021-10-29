//import animals from '../../assets/slider-01.jpg'
import React, {useEffect} from 'react';
import imagen from "../../Login_v4/images/bg-01.jpg"


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
                body += `<tr>
                <td>${data[i].datos_personales.numero_telefono}</td>
                <td>${data[i].datos_personales.nombre_apellido}</td>
                <td>${data[i].datos_personales.edad}</td>
                
                </tr>`
    
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
        <div class="container col-xs-6 col-sm-10 col-lg-11 col-xl-11 ">
    {/* <div class="row" >
      <div class="col-lg-12 text-center">
        <img src={animals} alt="Profesionales" width="100%"></img>
      </div>
    </div> */}
    <div class="container mt-4 shadow-lg p3 mt-5 bg-body rounded">
        <table class="table table-bordered table-striped ">
            <thead>
                <tr>
                    <th>NUMERO TELEFONO</th>
                    <th>USERNAME</th>
                    <th>EDAD</th>
                   
                </tr>
            </thead>
            <tbody id="data">

            </tbody>
        </table>
    </div>
    <button onClick={() => EnviarDatosPost()}>ENVIAR DATOS</button>
    </div>
    </div>
    )
}

export default Home;
