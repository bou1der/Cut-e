import {Schema,model} from 'mongoose'
import Profile from "../profile-model";
import Storage from "../blob-storage-model";
const PostSchema = new Schema({
    PID:{type:Number,required:true},
    title:{type:String,required:true},
    author:{type:Number,required:true},
    images:[{key:String,link:String}],
    likes:{
        count:{type:Number, default:0,required:false},
        users:{type:[Number],default:[],required:false}
    },
    views:{
        count:{type:Number, default:0,required:false},
        users:{type:[Number],default:[],required:false}
    },
    params:{
        private:{type:Boolean,default:false,required:false}
    }
})
const profile = PostSchema.virtual('profile')
profile.get(async function (){
    const p = await Profile.findOne({where:{id:this.author},include:[{model:Storage,as:"av"}]})
    return {id:p?.id,nickname:p?.name,avatar:p?.av?.link}
})
PostSchema.path("author").set(function (v){
    return v
})


// function setter(v){
//     console.log(v)
//     return v
// }
// async function getter(id:number){
//     const p = await Profile.findOne({where:{id},include:[{model:Storage,as:"av"}]})
//     return {id:p?.id,avatar:p?.av?.link}
// }
// PostSchema.virtual('profile').get(async function (){
//     const p = await Profile.findOne({where:{id:this.author},include:[{model:Storage,as:"av"}]})
//     return {UID:p?.id,avatar:p?.av?.link}
// })
export default model('post',PostSchema)