import api from "../service/axios.ts";
import {AxiosResponse} from "axios"
export const register = async (
    nickname:string,
    login:string,
    password:string
):Promise<AxiosResponse>=>{

    return await api.post("/authorization/register",{nickname,login,password})

}
export const login = async (
    login:string,
    password:string
):Promise<AxiosResponse> =>{

    return await api.post("/authorization/login",{login,password})

}
export const refresh = async (

):Promise<AxiosResponse> =>{

    return await api.post("/authorization/refresh")
}
export const logout = async (

):Promise<AxiosResponse> =>{

    return await api.post("/authorization/logout",{},{withCredentials:true})

}