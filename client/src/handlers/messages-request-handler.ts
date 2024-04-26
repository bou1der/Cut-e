import api from "../service/axios.ts";
import {AxiosResponse} from "axios"
export const fetchChats = async ():Promise<[]> =>{
    const chats = api.post("/messanger/chats")
    return []
}