import axios from "axios"


const BACKEND_URL = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:4002/api/v1/noteapp'
})

export default BACKEND_URL