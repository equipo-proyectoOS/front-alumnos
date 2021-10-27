import animals from '../../assets/slider-01.jpg'
import React from 'react';


const Home = () => {

        let url = "http://localhost:4000/usuarios";
        fetch(url)
            .then(response => response.json())
            .then(data => mostrarData(data))
            .catch(error => console.log(error))
    
        const mostrarData = (data) => {
            console.log(data)
            let body = ""
            for (let i = 0; i < data.length; i++) {
                body += `<tr>
                <td>${data[i].id}</td>
                
                <td>${data[i].username}</td>
                <td>${data[i].password}</td>
                
                </tr>`
    
            }
            document.getElementById('data').innerHTML = body
        }
    
    const EnviarDatosPost = () => {
        const objt = {
                  id: 2,
                  username: "correoxd@gmail.com",
                  password: "123456",
                  
        }
        console.log(objt)
        let url = "http://localhost:4000/usuarios";
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
        
        <div class="container col-xs-6 col-sm-10 col-lg-11 col-xl-11 ">
    <div class="row" >
      <div class="col-lg-12 text-center">
        <img src={animals} alt="Profesionales" width="100%"></img>
      </div>
    </div>
    <div class="container mt-4 shadow-lg p3 mt-5 bg-body rounded">
        <table class="table table-bordered table-striped ">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>USERNAME</th>
                    <th>PASSWORD</th>
                   
                </tr>
            </thead>
            <tbody id="data">

            </tbody>
        </table>
    </div>
    <button onClick={() => EnviarDatosPost()}>ENVIAR DATOS</button>
    </div>
    )
}

export default Home;
