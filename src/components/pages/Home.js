import animals from '../../assets/slider-01.jpg'
import React from 'react';


const Home = () => {

        let url = "https://jsonplaceholder.typicode.com/users";
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
                <td>${data[i].name}</td>
                <td>${data[i].username}</td>
                <td>${data[i].email}</td>
                <td>${data[i].address.street}</td>
                <td>${data[i].address.suite}</td>
                <td>${data[i].phone}</td>
                <td>${data[i].website}</td>
                <td>${data[i].company.name}</td>
                </tr>`
    
            }
            document.getElementById('data').innerHTML = body
        }
    
    const EnviarDatosPost = () => {
        const objt = {
                  id: 11,
                  name: "Enzo",
                  username: "Enzo12",
                  email: "correoprueba1@gmail.com",
                  address: {
                    street: "Kulas",
                    suite: "Apt. 12"
                    },
                  phone: "324567689",
                  website: "soli.org",
                  company: {
                        name: "burbuja1"
                  }
        }
        console.log(objt)
        let url = "https://jsonplaceholder.typicode.com/users";
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
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>ADDRESS STREET</th>
                    <th>ADDRESS SUITE</th>
                    <th>PHONE</th>
                    <th>WEBSITE</th>
                    <th>COMPANY NAME</th>
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
