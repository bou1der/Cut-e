import api from "../service/axios.ts";
import {profile} from "../types/axios-response-types.ts";

export const uploadAvatarImage = async (avatar:File) =>{
    const formdata = new FormData()
    formdata.append("avatar",avatar)
    // formdata.append("background",background)
    const req = await api.post("/profile/upload/images", formdata)
    console.log(req)
}
export const findProfile = async (queryParams:string,controller?:AbortSignal) =>{
    const req = await api.post<profile[]>("/profile/find", {queryParams},{signal:controller})
    return req?.data
}
export const uploadBackgroundImage = async (background:File) =>{
    const formdata = new FormData()
    formdata.append("background",background)
    const req = await api.post("/profile/upload/images",formdata)
    console.log(req)
}
export const getProfile = async (id:number):Promise<profile> =>{
    const req = await api.post<profile>("/profile/fetch",{id})
    return req.data
}