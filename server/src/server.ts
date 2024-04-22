import express,{Express,Request,Response} from "express"
import cookieParser from "cookie-parser";
import cors,{} from "cors"
import dotenv from "dotenv";
const app: Express = express();

import config from "../config.json"
// routes
import authorization from "./routes/authorization-router"
import { verifyToken } from "./service/jwt-service";
// routes
dotenv.config()
// http://localhost:3000/
app.use(cors({
    origin:config.server.cors.origin,
    credentials:true,
    allowedHeaders:"*",
}))
app.use(cookieParser())

app.use('/api/authorization',authorization)

export default   app