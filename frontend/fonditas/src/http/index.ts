import axios from "axios";

const http = axios.create({
   baseURL: 'http://localhost:8888/fonditas/app/v1/'
})

export default http