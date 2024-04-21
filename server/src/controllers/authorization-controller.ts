import express,{Request,Response} from "express";
import error from "../service/Error-handler";
import User from "../models/users-model";
export const register = async (req:Request,res:Response) =>{
    try{
        res.status(200).json({status:"ok"})
    }catch (err) {
        error.handle(res,500,err as object, req.body,"Непредвиденная ошибка")
    }
}

export const login = async (req:Request,res:Response) =>{
    try {
        
    }catch (err) {
         error.handle(res,500,err as object, req.body,"Непредвиденная ошибка")
    }
}
export const refresh = async (req:Request,res:Response) =>{
    try {

    }catch (err) {
         error.handle(res,500,err as object, req.body,"Непредвиденная ошибка")
    }
}
export const logout = async (req:Request,res:Response) =>{
    try {

    }catch (err) {
         error.handle(res,500,err as object, req.body,"Непредвиденная ошибка")
    }
}