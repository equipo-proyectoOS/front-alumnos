import React,{useState} from 'react';
import { Link } from "react-router-dom";

const Users = () => {
    const [rutas, setRutas] = useState(false);
    const cambiarEstado = (val) => setRutas(val);
    return (
        <div>
            <h3>Hola Users</h3>
            <div className="App">
                {
                    rutas ?
                        <ul>
                            <li>
                                <Link to='/home'> Home </Link>
                            </li>
                            <li>
                                <Link to='/posts'> Post </Link>
                            </li>
                            <li>
                                <Link to='/login'> Login </Link>
                            </li>
                        </ul> : null
                }
                <button style={{ margin: "auto" }} className="btn btn-success"
                    onClick={() => cambiarEstado(!rutas)}
                >
                    RUTAS
                </button>
            </div>
        </div>
    )
}

export default Users