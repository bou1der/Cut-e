import {Schema,model} from 'mongoose'

const PostSchema = new Schema({
    UID:{type:Number,required:true},
    title:{type:String,required:true},
    likes:{
        count:{type:Number, default:1,required:false},
        users:{type:[Number],default:[],required:false}
    },
    views:{
        count:{type:Number, default:1,required:false},
        users:{type:[Number],default:[],required:false}
    }
    // comments:{
    //     count:Number,
    //     text:{
    //
    //     }
    // }
})

export default model('post',PostSchema)