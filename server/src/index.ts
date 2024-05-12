import dotenv from "dotenv";
import config from "../config.json"
dotenv.config()

import SocketIO from "./server-socket";
import app from "./server";
import http from 'http';
import connect from "./models/no-relation-database/mongo-connect";

const server = http.createServer(app)
const port : number = config.server.port || 8000

connect()
SocketIO.InitSocketServer(server)
server.listen(port,()=>{
    console.log(`[server]:${port} has been deployment... || ʕ ᵔᴥᵔ ʔ`)
})

