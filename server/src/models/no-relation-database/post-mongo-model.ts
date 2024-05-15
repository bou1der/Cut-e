import {Schema,model} from 'mongoose'
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
    // comments:{
    //     count:Number,
    //     text:{
    //
    //     }
    // }
})

export default model('post',PostSchema)