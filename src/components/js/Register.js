import axios from "axios";

const baseUrl = "http://localhost:4000/usuarios";


const registro = async credentials => {
    const { data } = await axios.post(baseUrl, credentials)
    return data
    
}
export default  {registro};