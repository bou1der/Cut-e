import mongoose from "mongoose";
import config from "../../../config.json"

const connect = async () =>{
    await mongoose.connect(process.env.MONGO_DB_CONNECT!)

    mongoose.Promise = global.Promise
    const db = mongoose.connection
    db.on('error',(err)=>{
        console.log(err)
    })
    db.once('open',()=>{
        console.log("[MongoDB]:has been connected...")
    })
}
export default connect
