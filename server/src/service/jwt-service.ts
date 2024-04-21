import Token from "../models/jwt-token-model"
import jsonwebtoken,{JwtPayload} from "jsonwebtoken"
import config from "../../config.json"
import Tokens from "../models/jwt-token-model";
export const genTokenHandler = (payload:JwtPayload) : Object =>{
    const refresh:string = jsonwebtoken.sign(payload, config.JWT.RefreshKey,{expiresIn:'20d'})
    const access:string = jsonwebtoken.sign(payload, config.JWT.RefreshKey,{expiresIn:'20d'})
    return {
        refresh,
        access
    }
}
export const saveToken = async (userId:number,refresh:string) =>{
    const exist = await Token.findOne({where:{id:userId}})
    if (exist){
        exist.dataValues.refresh = refresh
        return exist.save()
    }
    return await Token.create({id:userId,refresh})
}
export const logout = async (refresh:string)=>{
    const exist = await  Token.findOne({where:{refresh}})
    if (!exist){
        return;
    }
    await exist.update({refresh:""})
}
export const verifyToken = (token:string,isRefresh?:boolean) =>{
    if (isRefresh){
        return jsonwebtoken.verify(token,config.JWT.RefreshKey)
    }
    return jsonwebtoken.verify(token,config.JWT.AccessKey)
}