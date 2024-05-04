import Token from "../models/jwt-token-model"
import jsonwebtoken,{JwtPayload} from "jsonwebtoken"
import config from "../../config.json"
type PayloadToken = {
    id:number
    name:string
    admin:boolean

}
export const genTokenHandler =(payload:PayloadToken) :{refresh:string, access:string} =>{
    const access:string = jsonwebtoken.sign(payload, config.JWT.AccessKey,{expiresIn:'10m'})
    const refresh:string = jsonwebtoken.sign(payload, config.JWT.RefreshKey,{expiresIn:'20d'})
    return {
        refresh,access
    }
}
export const saveToken = async (userId:number,refresh:string) =>{
    const exist = await Token.findOne({where:{id:userId}})
    if (exist){
        await exist.update({refresh})
        return
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
export const verifyRefreshToken =  (token: string) => {
    try{
      const tokenData =  jsonwebtoken.verify(token,config.JWT.RefreshKey);
      return tokenData as any;
    }catch (e){
        console.log(e)
        return null;
    }
}

export const verifyAccessToken = (token:string) =>{
    try{
      const tokenData = jsonwebtoken.verify(token,config.JWT.AccessKey)
      return tokenData;
    }catch (e){
        console.log(e)
        return null;
    }
}
