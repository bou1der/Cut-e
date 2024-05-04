import multer, {FileFilterCallback} from "multer";
import {} from "multer"

const filterTypes = ['image/png','image/jpg','image/jpeg',]
const filter = (req:Express.Request,file:Express.Multer.File,cb:FileFilterCallback) =>{
    if (filterTypes.includes(file.mimetype)){
        cb(null,true)
    }else {
        cb(null,false)
    }

}

export default multer({storage:undefined,fileFilter:filter})