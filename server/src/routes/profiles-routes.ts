import express,{Router,Request,Response} from "express"
import {foundProfile, getProfile, UploadPost, UploadProfileImages} from "../controllers/profiles-controller";
import uploads from "../middlewares/file-uploads-middleware"
const Parser = express.json()
const router:Router = express.Router()

router.post("/fetch", Parser,async (req,res)=>{
    await getProfile(req,res)
})
router.post("/upload/images",Parser,uploads.any(), async (req,res) =>{
    await UploadProfileImages(req,res)
})
router.post("/find",Parser,async (req,res)=>{
    await foundProfile(req,res)
})
router.post("/upload/post",Parser, async (req,res)=>{
    await UploadPost(req,res)
})










export default router