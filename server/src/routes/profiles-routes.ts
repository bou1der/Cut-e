import express,{Router,Request,Response} from "express"
import {getProfile, UploadProfileImages} from "../controllers/profiles-controller";
import uploads from "../middlewares/file-uploads-middleware"
const Parser = express.json()
const router:Router = express.Router()

router.post("/fetch", Parser,async (req,res)=>{
    await getProfile(req,res)
})
router.post("/upload/images",Parser,uploads.any(), async (req,res) =>{
    await UploadProfileImages(req,res)
})












export default router