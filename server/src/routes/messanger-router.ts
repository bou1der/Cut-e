import express,{Router,Request,Response} from "express"
import {fetchChats, fetchMessages,createChat} from "../controllers/messanger-controller"
const Parser = express.json()
const router:Router = express.Router()

router.post("/chats",Parser, async (req: Request,res:Response) =>{
    await fetchChats(req,res)
})
router.post("/messages",Parser,async (req:Request,res:Response)=>{
    await fetchMessages(req,res)
})
router.post("/chat/create",Parser,async (req:Request,res:Response) =>{
    await createChat(req,res)
})
export default router