// import config from '../config.json'
import app from "./server";
import config from "../config.json"
import http from 'http';
import SocketIO from "./server-socket";
import dotenv from "dotenv";
// import dotenv from "dotenv"
// dotenv.config()
const server = http.createServer(app)

dotenv.config()


const port : number = config.server.port || 8000


SocketIO.InitSocketServer(server)
server.listen(port,()=>{
    console.log(`[server]:${port} has been deployment... || ʕ ᵔᴥᵔ ʔ`)
})

