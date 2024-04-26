import express,{Router,Request,Response} from "express"
import { fetchChats } from "../controllers/messanger-controller"
const Parser = express.json()
const router:Router = express.Router()

router.post("/chats",Parser,(req: Request,res:Response) =>{
    fetchChats(req,res)
})

export default router