import axios from "axios";

const baseUrl = "https://ipf-profesionales.herokuapp.com/api/login";


const login = async credentials => {
    const { data } = await axios.post(baseUrl, credentials)
   // console.log(data, "data")
    return data
    
}
export default  {login};