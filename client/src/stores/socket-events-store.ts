import {} from "mobx"
import {} from "socket.io-client"
import config from "../../config.json"
import * as SocketIO from "socket.io-client"
// interface SocketInterface {
//     _socket:SocketIO.Socket
//     connect():void
// }
class SocketStore {
    private _socket:SocketIO.Socket
    constructor() {
    }
    public connect(){
        this._socket = SocketIO.connect(config.socketIo.url || "http://localhost:8000")
        this._socket.on('connect',()=>{
            if (this._socket.connected){
                this.onMessages()

            }else{
            //     errorHandler
                console.log(this._socket.connected)
            }
        })
    }
    public emitMessage(id:number,message:string):void{
        this._socket.emit("chat:sendMessage", {id,message})
    //     errorHandler

    }
    private onMessages():void{
        this._socket.on("chat:getMessage",(message)=>{
            // messages store
            console.log(message)
        })
    }

}
export default new SocketStore()