import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

const BACKEND_URL = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export default BACKEND_URL