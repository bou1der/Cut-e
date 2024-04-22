import Token from "../models/jwt-token-model"
import jsonwebtoken,{JwtPayload} from "jsonwebtoken"
import config from "../../config.json"
import Tokens from "../models/jwt-token-model";
type PayloadToken = {
    id:number
    name:string
    admin:boolean

}
export const genTokenHandler = (payload:PayloadToken) : {refresh:string, access:string} =>{
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
export const logoutToken = async (refresh:string)=>{
    const exist = await  Token.findOne({where:{refresh}})
    if (!exist){
        return;
    }
    await exist.update({refresh:""})
}
export const verifyToken = (token:string,isRefresh?:boolean) =>{
    if (isRefresh){
        const data = jsonwebtoken.verify(token,config.JWT.RefreshKey)
        
        return data
    }
    return jsonwebtoken.verify(token,config.JWT.AccessKey)
}