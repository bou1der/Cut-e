import express,{Request,Response} from "express";
import bcrypt from "bcrypt"
import error from "../service/Error-handler";
import {genTokenHandler, saveToken, logoutToken,verifyRefreshToken} from "../service/jwt-service"
import User from "../models/users-model";
import Token from "../models/jwt-token-model"
export const register = async (req:Request,res:Response) =>{
    try{
        const {nickname,login,password} = req.body
        const exist = await User.findOne({where:{login}})
        if(exist){
            return error.handle(res,500,"Пользователь уже существует",{login,password,exist},"Ошибка выберите другой логин")
        }
        const hash :string = await bcrypt.hash(password,10)
        const user = await User.create({nickname,login,password:hash})
        const tokens = genTokenHandler({id:user.dataValues.id, name:user.dataValues.nickname, admin:user.dataValues.admin})

        await saveToken(user.dataValues.id,tokens.refresh)

        res.cookie('refresh',tokens.refresh, {maxAge:1728000,httpOnly:true})
        res.status(200).json({tokens})
    }catch (err) {
        error.handle(res,500,err as object, req.body,"Непредвиденная ошибка")
    }
}

export const login = async (req:Request,res:Response) =>{
    try {
        const {login,password} = req.body
        const exist = await User.findOne({where:{login}})
        if (!exist){
            return error.handle(res,404,"Пользователь ненайден",req.body,"Проверьте пароль/логин")
        }
        const result = await bcrypt.compare(password,exist.dataValues.password)
        if(!result){
            return error.handle(res,404,"Неправильный пароль",req.body,"Проверьте пароль/логин")
        }
        const tokens = genTokenHandler({id:exist.dataValues.id,name:exist.dataValues.nickname,admin:exist.dataValues.admin})
        await saveToken(exist.dataValues.id,tokens.refresh)

        res.cookie('refresh',tokens.refresh, {maxAge:1728000,httpOnly:true})
        res.status(200).json({tokens})
    }catch (err) {
         error.handle(res,500,err as object, req.body,"Непредвиденная ошибка")
    }
}
export const refresh = async (req:Request,res:Response) =>{
    try {
        const {refresh} = req.cookies
        if(!refresh){
            return error.handle(res,404,"Отсутствует refresh токен",req.cookies,"Ненайденны некоторые данные")
        }
        const userData = verifyRefreshToken(refresh)
        const token = await Token.findOne({where:{refresh}})
        if(!userData || !token){
            return error.handle(res,404,"Пользователь ненайден", {token,userData})
        }
        const user = await User.findOne({where:{id:userData.id}})
        if (!user){
            return error.handle(res,404,"Пользователь ненайден", {token,userData})
        }
        const tokens = genTokenHandler({id:user.dataValues.id,name:user.dataValues.nickname,admin:user.dataValues.admin})
        await saveToken(user.dataValues.id,tokens.refresh)
        res.cookie('refresh',tokens.refresh, {maxAge:1728000,httpOnly:true})
        res.status(200).json({tokens})
    }catch (err) {
         error.handle(res,500, err as object, req.body,"Непредвиденная ошибка")
    }
}
export const logout = async (req:Request,res:Response) =>{
    try {
        const {refresh} = req.cookies
        if(!refresh){
            return error.handle(res,404,"Отсутствует refresh токен",req.cookies,"Ненайденны некоторые данные")
        }
        if(!await Token.findOne({where:{refresh}})){
            return error.handle(res,404,"Пользователь ненайден в БД",req.cookies,"Пользователь ненайден")
        }
        const token = await logoutToken(refresh)

        res.clearCookie('refresh')

        res.status(200).json({status:"Success"})
    }catch (err) {
         error.handle(res,500,err as object, req.body,"Непредвиденная ошибка")
    }
}