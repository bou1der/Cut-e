import {Request,Response} from "express"
import Chats from "../models/chats-model"
import { Sequelize } from "sequelize"
export const fetchChats = async (req:Request,res:Response) =>{
        console.log(req.body)
        const userChats = await Chats.findAll({
                where: Sequelize.literal(`JSON_CONTAINS(json_unquote(json_extract(users, '$.usersId')), '${req.body.user.id}')`),
                raw:true
        })
        console.log(userChats)
        res.status(200)
}