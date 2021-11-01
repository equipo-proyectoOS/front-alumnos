import axios from "axios";

const baseUrl = "https://ipf-profesionales.herokuapp.com/api/login";


const buscador = async credentials => {
    const { data } = await axios.post(baseUrl, credentials)
    return data
    
}
export default  {buscador};