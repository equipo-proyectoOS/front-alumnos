import axios from "axios";

const baseUrl = "http://localhost:4000/usuarios";


const login = async credentials => {
    const response = await axios.get(baseUrl, credentials)
   // console.log(data, "data")
    return response.data
    
}

export default  {login};