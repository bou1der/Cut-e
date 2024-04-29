import WebSocket,{Server} from "socket.io"
import http from "http";
import config from "../config.json"
import {Connections} from "./socket/socket-events";
export const socket = async (http:http.Server) =>{
    const io = new WebSocket.Server(http,{
        cors:{
            allowedHeaders:"*",
            origin:config.server.cors.origin
        }
    })
    console.log(`[WebSocket]:${config.server.port}:Server has been started...`)
    const clients:Array<string> = []
     Connections(io,clients)
}