import {} from "mobx"
import {} from "socket.io-client"
import config from "../../config.json"
import * as SocketIO from "socket.io-client"
import messageStore from "./message-store.ts";
import {message} from "../types/axios-response-types.ts";
import notificationStore from "./notification-store.ts";
import {chat} from "../types/axios-response-types.ts"
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
        this._socket = SocketIO.connect(config.socketIo.url || "http://localhost:8000",{auth:(cb)=>{
                cb({
                    uid:messageStore.userId
                })
            }}
        )
        console.log(this._socket.active)

        this._socket.on('connect',()=>{
            if (this._socket.connected){
                this._onMessages()
                this.connectNewChat()

            }else{
            //     errorHandler
                console.log(this._socket)
            }
        })

        this._socket.on('connect_error',(err) =>{
            console.log(err)
        })
    }
    public emitMessage(textMessage:string):void{
        this._socket.emit("chat:send/message", {
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
        this._socket.on("chat:get/message",(message:GetTextMessage)=>{
            messageStore.saveMessage(message)
            if (message.message.from !== messageStore.userId){
                notificationStore.MessageNotification(message)
            }
        })
    }
    public connectNewChat():void{
        this._socket.on('chat:new/room/join',(chat:chat)=>{
            messageStore.createChat(chat)
        })
    }

}
export default new SocketStore()