import { Request, Response} from "express"
import Chats from "../models/chats-model"
import {Sequelize} from "sequelize"
import User from "../models/users-model";
import Messages from "../models/messages-model";


// ВСЮ ЭТУ ФУНКЦИЮ К ХРЕНАМ СНЕСТИ И ПЕРЕДЕЛАТЬ!!!!!!
export const fetchChats = async (req:Request,res:Response) =>{
try {
                // let members: string[] = []
                // const userChats = await Chats.findAll({
                //         where: Sequelize.literal(`JSON_CONTAINS(json_unquote(json_extract(users, '$.id')), '${req.user.id}')`),
                // })
                //     .then((data)=>{
                //         data.map((chat)=>{
                //                 const test:string[] = JSON.parse(chat.users).id.slice(1,-1).split(',')
                //                 members = members.concat(test)
                //         })
                //         members = [...new Set(members)]
                //         return data;
                // })

                // console.log(userChats)
                // console.log(members)
                // const AllChatMembers = await  User.findAll({where:{id:members}})
        const arr:any = []
        const userChats = await Chats.findAll({
                where: Sequelize.literal(`JSON_CONTAINS(json_unquote(json_extract(users, '$.id')), '${req.user.id}')`),
        })
        .then((data)=> {
                data.map(el =>{
                        const members = JSON.parse(el.users).id.slice(1,-1).split(",")
                        arr.push({id:el.dataValues.id,name:el.dataValues.name,members,isGroup:el.dataValues.isGroup})
                })
        })
// Переделать findAll
        let i = 0;
        for (i;i < arr.length;i++){
                if (!arr[i].isGroup){
                        const otherId = arr[i].members.filter(el => el != req.user.id)
                        await User.findOne({where:{id:otherId}}).then(user =>{arr[i].name = user?.dataValues.nickname})
                }
        }


        res.status(200).json({chats:arr,id:req.user.id})
}catch (e) {
        console.log(e)
}

}

export const fetchMessages = async (req:Request,res:Response) =>{
        try {
                const {id}:{id:number} = req.body
                const messages = await Messages.findAll({where:{chatId:id}})
                res.status(200).json({messages})
        }catch (err) {
                console.log(err)
        }
}