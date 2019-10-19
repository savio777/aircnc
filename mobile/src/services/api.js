import axios from 'axios'

const api = axios.create({
//    baseURL : 'http://localhost:5555'
    baseURL: 'http://192.168.0.107:5555'
})

export default api
