
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import imagen from "../../Login_v4/images/bg-01.jpg"
import '../assets/css/tarjetas.css';

import { Link } from 'react-router-dom';
//import { Filtro } from '../js/Filtro';





    const token = localStorage.getItem('loggedUser')
    

    /* const setToken= newToken => {
        token = '${newToken}'
    } */

    const deleteUser = async (_id) =>{
        
        console.log(_id)
        const config = {
            headers: {
                Authorization: token
            }
        }
        
        let urlDelete = 'https://ipf-profesionales.herokuapp.com/api/profesionales/'+ _id;
        await axios.delete( urlDelete,config )
    }


const Home = (props) => {
        
    const [listatadoCompleto, setListadoCompleto] = useState ([])

    useEffect(() => {
        //console.log(props + ' Home')
        if(props.location.datos){setListadoCompleto(props.location.datos.profesionales)}
        else{setListadoCompleto([])}

        
    }, [props])

    return (
        
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

