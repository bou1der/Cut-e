import {} from "mobx"
import {} from "socket.io-client"
import config from "../../config.json"
import * as SocketIO from "socket.io-client"
import messageStore from "./message-store.ts";
import {message} from "../types/axios-response-types.ts";
import notificationStore from "./notification-store.ts";
// interface SocketInterface {
//     _socket:SocketIO.Socket
//     connect():void
// }

export type GetTextMessage = {
    chat:{
        id:number,
        name:string
    },
    message:message
}
class SocketStore {
    private _socket:SocketIO.Socket
    constructor() {
    }
    public async connect(){
        this._socket = await SocketIO.connect(config.socketIo.url || "http://localhost:8000")
        this._socket.on('connect',()=>{
            if (this._socket.connected){
                this._socket.emit('chats:rooms/join',messageStore.userId)
                this._onMessages()

            }else{
            //     errorHandler
                console.log(this._socket.connected)
            }
        })
    }
    public emitMessage(textMessage:string):void{
        this._socket.emit("chats:send/message", {
            chat:{
                id:messageStore.currentChat?.chat.id,
                name:messageStore.currentChat?.chat.name,
            },
            message:{
                text:textMessage,
                from:messageStore.userId,
            }
        })

    //     errorHandler

    }
    private _onMessages():void{
        this._socket.on("chats:get/message",(message:GetTextMessage)=>{
            messageStore.saveMessage(message)
            if (message.message.from !== messageStore.userId){
                notificationStore.MessageNotification(message)
            }
        })
    }

}
export default new SocketStore()