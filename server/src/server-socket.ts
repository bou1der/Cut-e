import WebSocket, {Server, Socket} from "socket.io"
import config from "../config.json"
import {Connections} from "./socket/socket-events";
import {chat,message} from "./types/messages-types";
import Chats from "./models/chats-model";
import {Sequelize} from "sequelize";
import Messages from "./models/messages-model";

type mess = {
    chat:Omit<chat, "members" | "isGroup">
    message:Omit<message, "id" | "chatId" | "timeStamp">
}

class SocketIO{
    private _io:Server;
    private _clients:Map<number,Socket>;
    constructor() {
        this._clients = new Map()
    }
    public InitSocketServer(http:any){
        this._io = new WebSocket.Server(http,{
            cors: {
                allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
                origin: config.server.cors.origin
            }
        })
        console.log(`[WebSocket]:${config.server.port}:Server has been started...`)
        this._onConnections()
    }
    private _onConnections() {
        this._io.on('connection', async (socket) => {
            // Использование middleware должно быть вне обработчика 'connection'
            this._io.use((socket, next) => {
                const uid = socket.handshake.auth.uid;
                if (uid) {
                    next();
                } else {
                    next(new Error("Authentication error"));
                }
            });

            const uid = socket.handshake.auth.uid;
            if (this._clients.has(uid)) {
                const prev = this._clients.get(uid);
                if (prev) {
                    prev.disconnect(true);
                }
            }
            this._clients.set(uid, socket);
            console.log(`Current number of connected clients: ${this._clients.size}`);

            this._SocketConnectAllRooms(uid);

            socket.on('chat:send/message', async (message:mess) => {
                const write = await Messages.create({chatId:message.chat.id,text:message.message.text,from:message.message.from});
                this._io.to(`${message.chat.id}`).emit('chat:get/message', {chat:message.chat,message:write.dataValues});
            });
        });
    }
    private async _SocketConnectAllRooms(UID: number) {
        const socket = this._clients.get(UID);
        if (socket) {
            const chats = await Chats.findAll({
                where: Sequelize.literal(`JSON_CONTAINS(users, '${UID}')`)
            });
            chats.forEach(chat => {
                socket.join(`${chat.id}`);
            });
        }
    }
    public emitNewChat(UID:number,chat: { id:number,users:number[],isGroup:boolean,name:string }){
        chat.users.map((user)=>{
            const socket = this._clients.get(user)
            socket?.join(`${chat.id}`)
            socket?.emit(`chat:new/room/join`,chat)
        })
    }
}

export default new SocketIO()