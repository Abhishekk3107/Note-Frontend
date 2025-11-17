import axios from "axios"

const BACKEND_URL = axios.create({
    baseURL: "https://note-backend-fy6v.onrender.com"
})

export default BACKEND_URL