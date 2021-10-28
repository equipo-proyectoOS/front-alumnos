import axios from "axios";

const baseUrl = "https://equipo-server.herokuapp.com/auth/login";


const login = async credentials => {
    const { data } = await axios.post(baseUrl, credentials)
   // console.log(data, "data")
    return data
    
}

export default  {login};