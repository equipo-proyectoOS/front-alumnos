
//Importamos los Hooks.
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import imagen from "../../Login_v4/images/bg-01.jpg"
import '../assets/css/tarjetas.css';
import { Link } from 'react-router-dom';
//import { Filtro } from '../js/Filtro';





    
    

    /* const setToken= newToken => {
        token = '${newToken}'
    } */

    

//Agregamos props como parámetro de nuestro componente.
const Home = (props) => {
    
    //creamos un estado encargado de manejar el listado, 
    //como valor inicial le damos un array vacío.
    const [listatadoCompleto, setListadoCompleto] = useState ([])

    //Usamos el useEffect para setear los valores del prop.
    useEffect(() => {

        //hacemos un console.log(props) para analizar cómo se compone el prop. enviado desde el Link.
        //console.log(props)

         //si existe lo asignamos a listadoCompleto.
        if(props.location.datos){setListadoCompleto(props.location.datos.profesionales)}

        //Si no existe le asignamos array vacio.
        else{setListadoCompleto([])}
    }, [props])


    //traemos el token del localStorage
    const token = "localStorage.getItem('loggedUser')"


    //funcion para eliminar un profesional
    const deleteUser = async (_id) =>{
        
        console.log(_id)
        //onsole.log()
        const config = {
            headers: {
                Authorization: token
            }
        }
        
        let urlDelete = 'https://ipf-profesionales.herokuapp.com/api/profesionales/'+ _id;
        await axios.delete( urlDelete,token )
    }

    return (

//Creamos una tarjeta para mostrar los datos.
//mediante el método “map” iteramos sobre el array para mostrar los datos correspondientes.

    <div class="container-login100" style={{ backgroundImage: `url(${imagen})` }}>    
        <div class="container mt-2">
            <div class="row" id="data">
                {
                    listatadoCompleto.length > 0 ? listatadoCompleto.map(item => {    
                        return(
                            <div class="col-md-3 col-sm-6">
                                <div class="card card-block mx-3 mb-5">
                                <figure>
                                <img src="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/foto-de-perfil-para-instagram-1024x538.png" alt="Perfil"/>
                                <div class = "capa">
                                        <Link  to= {{pathname:'/perfil/' + item._id}}
                                                    ><button className="bt btn-success">DETALLE</button>
                                         </Link>
                                </div>
                                </figure>
                                <h5 class="card-title mt-3 mb-3">{item.personal_info.fullname}</h5>
                                
                               
                                <p>DNI: <b>{item.personal_info.dni}</b></p> 
                                <p>Genero: <b>{item.personal_info.gender}</b></p> 
                                
                                <p>Email: <b>{item.contact_info.email}</b></p> 

                                <div className="buttonDelete">
                                <button className="bt btn-danger" onDoubleClick={() => (deleteUser(item._id))}>ELIMINAR</button>
                                </div>
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

