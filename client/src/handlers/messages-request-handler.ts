import api from "../service/axios.ts";
import {chat,message} from "../types/axios-response-types.ts";

interface userChats {
    chats:chat[]
    id:number
}
interface messageResponse{
    messages:message[]
}

export const fetchChats = async ():Promise<userChats> =>{
    const res = await api.post<Promise<userChats>>("/messanger/chats")
    return res.data
}
export const fetchMessages = async (id:number):Promise<messageResponse> =>{
    const res = await api.post<Promise<messageResponse>>("/messanger/messages",{id})
    return res.data
}
export const newChat = async  (id:number) =>{
    const res = await api.post<chat>("/messanger/chat/create",{id})
    return res.data
}