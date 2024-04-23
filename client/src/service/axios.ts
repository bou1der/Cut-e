import axios from "axios"
import {} from "axios"
import config from "../../config.json"

const url = config.axios.ServerUrl || "http:/localhost:8080/api"
const api = axios.create({
    baseURL:url
})

export default api