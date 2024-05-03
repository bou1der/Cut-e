import {Request,Response} from "express";
import error from "../service/Error-handler";
import ProfileModel from "../models/profile-model";

export const getProfile = async (req:Request,res:Response) =>{
    try{
        const {id}:{id:number} = req.body
        const profile = await ProfileModel.findOne({where:{UID:id}})
        if (!profile){
            error.handle(res,404,"Profile undefined",req.body,"Профиль ненайден")
            return;
        }
        res.status(200).json({
            UID:profile.dataValues.UID,
            name:profile.dataValues.name,
            avatar:profile.dataValues.avatar,
            background:profile.dataValues.background,
            isPrivate:profile.dataValues.isPrivate,
            isChannel:profile.dataValues.isChannel
        })
    }catch (err) {
        error.handle(res,500,err as object, req.body,"Непредвиденная ошибка")
    }
}