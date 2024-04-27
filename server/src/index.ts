// import config from '../config.json'
import app from "./server";
import config from "../config.json"
import http from 'http';
// import dotenv from "dotenv"
// dotenv.config()
const server = http.createServer(app)



const port : number = config.server.port || 8000



server.listen(port,()=>{
    console.log(`[server]:${port} has been deployment... || ʕ ᵔᴥᵔ ʔ`)
})

