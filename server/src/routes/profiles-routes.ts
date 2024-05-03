import express,{Router,Request,Response} from "express"
import {getProfile} from "../controllers/profiles-controller";
const Parser = express.json()
const router:Router = express.Router()

router.post("/fetch", Parser,async (req,res)=>{
    await getProfile(req,res)
})












export default router