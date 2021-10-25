import axios from "axios";

const APIURL = "http://localhost:3000/api/login-user";

const iniciarsesion = async credentials => {
    const {data} = await axios.post(APIURL, credentials)
    return data
}

export default { iniciarsesion }