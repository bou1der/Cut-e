import express,{Express,Request,Response} from "express"
import cookieParser from "cookie-parser";
import cors,{} from "cors"
import dotenv from "dotenv";
const app: Express = express();
// routes
import authorization from "./routes/authorization-router"
import messanger from "./routes/messanger-router"
import profileRouter from "./routes/profiles-routes"
// routes
import CheckToken from "./middlewares/jwt-check-middleware"
import Posts from "./models/no-relation-database/post-mongo-model";

dotenv.config()

app.use(cors({
    origin: "http://localhost:3000",
    credentials:true,
    allowedHeaders: ["Origin", "X-Requested-With","Content-Length", "Content-Type", "Accept", "Authorization","Access-Control-Allow-Origin"],
}))

app.use(cookieParser())
app.use('/api/test', async (req,res)=>{
    const t = await Posts.create({UID:2,title:"test"})

    console.log(t)
})

app.use('/api/authorization',authorization)
app.use('/api/messanger',CheckToken,messanger)
app.use('/api/profile',CheckToken,profileRouter) 

export default app

// https://habr.com/ru/companies/oleg-bunin/articles/543946/