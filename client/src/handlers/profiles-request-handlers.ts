import api from "../service/axios.ts";
import {profile} from "../types/axios-response-types.ts";

export const uploadProfileImages = async ({avatar}:{avatar:File}) =>{
    const formdata = new FormData()
    formdata.append("avatar",avatar)
    // formdata.append("background",background)
    const req = await api.post("/profile/upload/images", formdata)
    console.log(req)
}
export const getProfile = async (id:number):Promise<profile> =>{
    const req = await api.post<profile>("/profile/fetch",{id})
    return req.data
}