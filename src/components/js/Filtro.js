
import React,{useState} from 'react'

export const Filtro = () => {

    const[texto, setTexto] = useState('');

    const handlinputChange = ({target}) => {
        setTexto(target.value)
        //console.log(texto)
    }

    const handlSubmit = (e) => {
        e.preventDefault()

        const idbuscar = texto;
        console.log(idbuscar);

        setTexto('');

        return idbuscar;
    }
    return (
        <div>
              <br></br>
            <form class="d-flex flex-row justify-content-center alig-items-center" onSubmit = {handlSubmit}>
              <input class="form-control col-sm-12 " 
                type="search" 
                placeholder="Buscar" 
                name="id"
                aria-label="Buscar"
                value={texto} onChange={handlinputChange}/>
                <button class="btn btn-outline-warning">Buscar</button>
            </form>
                <br></br>
</div>
    )
}


