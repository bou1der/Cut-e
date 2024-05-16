import api from "../service/axios.ts";
import {author, post, profile} from "../types/axios-response-types.ts";


type PostParams = {
    author:number
    to:number
    text:string
    images:File[]
    params?:{
        private:boolean
    }
}
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
export const UploadPost = async (params:PostParams) =>{
    const {images,...rest} = params
    const formdata = new FormData()
    if (images.length){
        images.map(image =>{
            formdata.append('image',image)
        })
    }
    formdata.append("params",JSON.stringify(rest))
    const req = await api.post("/profile/upload/post",formdata)
    return req.status
}
export const getProfile = async (id:number) =>{
    const req = await api.post<profile & {posts:Array<{post:post,author:author}>}>("/profile/fetch",{id})
    console.log(req)
    return req.data
}