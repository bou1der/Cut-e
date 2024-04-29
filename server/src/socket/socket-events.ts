import {Server} from "socket.io"
import Chats from "../models/chats-model";
import {Sequelize} from "sequelize";

export const Connections= (io:Server,clients:Array<string>) =>{
    io.on('connection',(socket)=>{
        console.log("---------------Клиент подключился---------------");
        console.log(socket.id)
        clients.push(socket.id);

        socket.on('chats:rooms/join',async (id) =>{
            const chats = await Chats.findAll({
                where: Sequelize.literal(`JSON_CONTAINS(json_unquote(json_extract(users, '$.usersId')), '${id}')`)
            })
            console.log(chats)
            if (!chats.length){
                socket.emit('error',"Undefined chats")
                return;
            }
            chats.map(chat =>{
                socket.join(`${chat.dataValues.id}`)
            })
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