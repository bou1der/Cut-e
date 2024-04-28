import express,{Router,Request,Response} from "express";
const router:Router = express.Router();
const JsonParser = express.json()
// controller
import {login, register,refresh,logout} from "../controllers/authorization-controller";
// controller

router.post("/register",JsonParser, async (req: Request,res: Response)=>{
    return await register(req,res)
})
router.post("/login",JsonParser,async (req:Request,res:Response)=>{
    return await login(req,res)
})
router.post("/refresh",JsonParser,async (req:Request,res:Response)=>{
    return await refresh(req,res)
})
router.post("/logout",JsonParser,async (req:Request,res:Response)=>{
    return await logout(req,res)
})

export default router