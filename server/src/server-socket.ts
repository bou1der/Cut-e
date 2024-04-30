import WebSocket,{Server} from "socket.io"
import http,{IncomingMessage,ServerResponse} from "http";
import config from "../config.json"
import {Connections} from "./socket/socket-events";

export const socket = async (http:any) =>{
    const io = new WebSocket.Server(http,{
        cors: {
            allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"],
            origin: config.server.cors.origin
        }
    })
    console.log(`[WebSocket]:${config.server.port}:Server has been started...`)
    const clients:Array<string> = []
    Connections(io,clients)
}