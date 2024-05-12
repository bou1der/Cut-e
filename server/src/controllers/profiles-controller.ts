import {Request,Response} from "express";

import error from "../service/Error-handler";
import BlobFilesStorage from "../service/blob-files-storage";
// models
import sequelize from 'sequelize'
import Storage from "../models/blob-storage-model";
import Profile from "../models/profile-model";
import {Op} from "sequelize";
// models
export const getProfile = async (req:Request,res:Response) =>{
    try{
        const {id}:{id:number} = req.body
        if (!id){
            return error.handle(res,404,"Profile undefined",req.body,"Профиль ненайден")
        }
        const profile = await Profile.findOne({
            where:{UID:id},
            include:[
                {
                    model:Storage,
                    as:"av"
                },
                {
                    model:Storage,
                    as:"bg"
                }
            ]
        })
        if (!profile){
            error.handle(res,404,"Profile undefined",req.body,"Профиль ненайден")
            return;
        }

        res.status(200).json({
            UID:profile.dataValues.UID,
            name:profile.dataValues.name,
            avatar:profile.av?.dataValues.link,
            background:profile.bg?.dataValues.link,
            isPrivate:profile.dataValues.isPrivate,
            isChannel:profile.dataValues.isChannel
        })
    }catch (err) {
        error.handle(res,500,err as object, req.body,"Непредвиденная ошибка")
        console.log(err)
    }
}
export const foundProfile = async (req:Request,res:Response) =>{
    try{
        const {queryParams} = req.body
        if (!queryParams){
            return error.handle(res,404,"Параметры запроса ненайдены", req.body ,"Invalid query")
        }
        const profiles = await Profile.findAll({
            where:{
                name:{
                    [Op.like]:`%${queryParams}%`
                }
            },
            include:[
                {
                    model:Storage,
                    as:"av",
                    attributes:['link']
                },
                {
                    model:Storage,
                    as:"bg",
                    attributes:['link']
                }
            ],
            attributes:{
                include:[
                    [sequelize.col('av.link'),'avatar'],
                    [sequelize.col('bg.link'),'background']
                ]
            }
        })
        res.status(200).json(profiles)
    }catch (err) {
        error.handle(res,500,err as object, req.body,"Непредвиденная ошибка")
    }
}
export const UploadProfileImages = async (req:Request,res:Response) =>{
    try {
        const UID = req.user.id
        if (!Array.isArray(req.files)){
            return;
        }
        const profile = await Profile.findOne({
            where:{UID,isChannel:false}
        })
        if (!profile){
            return error.handle(res,404,"Профиль ненайден",UID,"Профиль ненайден")
        }
        const blob = await BlobFilesStorage.SaveFile(req.files[0])
        const file = await Storage.findOne({where:{directory:blob.key}})
        if(!file){
            return error.handle(res,500,"Файл ненайден в блоб",blob,"Ошибка записи")
        }
        console.log(req.files[0].fieldname)
        if (req.files[0].fieldname === 'avatar'){
            await profile.update({avatar:file.id})
        }else if(req.files[0].fieldname === 'background'){
            await profile.update({background:file.id})
        }

        res.status(200).json({avatar:profile.avatar,background:profile.background})
    }catch (err) {
        error.handle(res,500,err as object, req.body,"Непредвиденная ошибка")
        console.log(err)
    }
}
export const UploadPost = async (req:Request,res:Response) =>{
    try {

    }catch (err) {
        error.handle(res,500,err as object, req.body,"Непредвиденная ошибка")
        console.log(err)
    }
}
