import {Response,Request, NextFunction} from "express"
import error from "../service/Error-handler"
import {verifyToken} from "../service/jwt-service"
export const CheckToken = (req: Request,res:Response,next:NextFunction) =>{
    try{
        const exist = req.headers.authorization
        if(!exist){
            return next(error.handle(res,403,"Отсутсвует access токен", req.headers,"Проблемы с некоторыми данными"))
        }
        const access = exist.split(' ')
        if(!access[1] || access[1] === null){
            return next(error.handle(res,403,"Отсутсвует access токен", req.headers,"Проблемы с некоторыми данными"))
        }
        const data =  verifyToken(access[1])
        if(!data){
            return next(error.handle(res,403,"Невалидный токен",{verify:data, token:exist},"Нелегал найден, депортировать"))
        }
        req.body.user = data
        next()
    }catch (err){
        error.handle(res,500,err as Object, req.headers,"Непредвиденная ошибка сервера")
    }
}