import axios from "axios"
import {} from "axios"
import config from "../../config.json"
import authorizationStore from "../stores/authorization-store.ts";

const url = config.axios.ServerUrl || "http:/localhost:8080/api"
const api = axios.create({
    withCredentials:true,
    baseURL:url,
})
api.interceptors.request.use((RequestConfig)=>{
    RequestConfig.withCredentials = true
    RequestConfig.headers.Authorization = `Bearer ${localStorage.getItem('access')}`
    return RequestConfig;

},(RequestReject)=>{
    console.log(RequestReject)
})

api.interceptors.response.use((response)=>{
    if (
        response.config.url === "/authorization/login" ||
        response.config.url === "/authorization/register" ||
        response.config.url === "/authorization/refresh"
    ){
        localStorage.setItem('access',response.data.tokens.access)
    }
    return response

},(ResponseReject)=>{
    if (ResponseReject?.response?.status === 403){
        authorizationStore.CheckAuth()

    }
    console.log(ResponseReject)
})

export default api