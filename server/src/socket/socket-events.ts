import {Server,Socket} from "socket.io"
import Chats from "../models/chats-model";
import Messages from "../models/messages-model";
import {Sequelize} from "sequelize";
import {message,chat} from "../types/messages-types";


type textMessage = {
    chat:Omit<chat, "members" | "isGroup">
    message:Omit<message, "id" | "chatId" | "timeStamp">
}
export const Connections= (io:Server,clients:Map<number,Socket>) =>{
    io.on('connection',(socket)=>{
        io.use((socket, next)=>{
            const uid = socket.handshake.auth.uid
            if (clients.has(uid)){
                const prev = clients.get(uid)
                if (prev){
                    prev.disconnect(true)
                }
                clients.set(uid,socket);
                console.log(clients.size)
                next()
            }
            clients.set(uid, socket)
        })

        socket.on('chats:rooms/join',async (id) =>{
            const chats = await Chats.findAll({
                where: Sequelize.literal(
                    `JSON_CONTAINS(users, '${socket.handshake.auth.uid}')`
                ),
            })
            chats.map(chat =>{
                socket.join(`${chat.dataValues.id}`)
            })
        })
        socket.on('chats:new/room/join',async (chat:chat)=>{
            const newChat = await Chats.findOne({where:{id:chat.id}})
            if (!newChat){
            //     emit err
                return
            }
           JSON.parse(newChat.users).map((member:number) =>{
               const sock = clients.get(member)
               sock?.join(`${newChat.id}`)
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
            socket.disconnect()
        })
        socket.on('disconnect', () =>{
            console.log("---------------Клиент отключился---------------");
            clients.delete(socket.handshake.auth.uid)
            console.log(clients.size)
        })

    })
}