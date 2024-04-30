import {Server} from "socket.io"
import Chats from "../models/chats-model";
import Messages from "../models/messages-model";
import {Sequelize} from "sequelize";
import {message,chat} from "../types/messages-types";


type textMessage = {
    chat:Omit<chat, "members" | "isGroup">
    message:Omit<message, "id" | "chatId" | "timeStamp">
}
export const Connections= (io:Server,clients:Array<string>) =>{
    io.on('connection',(socket)=>{
        console.log("---------------Клиент подключился---------------");
        console.log(socket.id)
        clients.push(socket.id);

        socket.on('chats:rooms/join',async (id) =>{
            const chats = await Chats.findAll({
                where: Sequelize.literal(`JSON_CONTAINS(json_unquote(json_extract(users, '$.id')), '${id}')`)
            })
            // if (!chats.length){
            //     return socket.emit('error',"Undefined chats")
            // }
            chats.map(chat =>{
                socket.join(`${chat.dataValues.id}`)
            })
        })
        socket.on('chats:send/message', async (sendmessage:textMessage)=>{
            try{
                const result =  await Messages.create({chatId:sendmessage.chat.id,text:sendmessage.message.text,from:sendmessage.message.from})
                io.to(`${sendmessage.chat.id}`).emit('chats:get/message',{chat:sendmessage.chat,message:result.dataValues})
            }catch (e) {
                // socket.emit('message',{chatid:message.chatid,text:message.text,from:message.from,error:true})
                // socket.emit('error', e)
            }

        })
        socket.on('connection:close', () =>{
            clients = clients.filter((el) =>{
                return el !== socket.id
            })
            console.log(clients)
            socket.disconnect()
        })
        socket.on('disconnect', () =>{
            console.log("---------------Клиент отключился---------------");
            console.log(socket.id)
            clients = clients.filter(el =>{
                return el !== socket.id
            })
            console.log(clients)
        })

    })
}