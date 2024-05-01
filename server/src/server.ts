import express,{Express,Request,Response} from "express"
import cookieParser from "cookie-parser";
import cors,{} from "cors"
import dotenv from "dotenv";
const app: Express = express();

// routes
import authorization from "./routes/authorization-router"
import messanger from "./routes/messanger-router"
// routes
import CheckToken from "./middlewares/jwt-check-middleware"
dotenv.config()
// http://localhost:3000/
app.use(cors({
    origin: "http://localhost:3000",
    credentials:true,
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization","Access-Control-Allow-Origin"],
}))
app.use(cookieParser())

app.use('/test',()=>{

})

app.use('/api/authorization',authorization)
app.use('/api/messanger/',CheckToken,messanger)

export default app