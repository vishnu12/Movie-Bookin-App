
import mongoose from 'mongoose'


const screenSchema=mongoose.Schema({

    name:{type:String,required:true},
    capacity:{
        type:Number,
        default:50
    },
    movie:{
        type:String,
        required:true
    },
    show_timing:{
        type:Array,
        default:[11.30,2.30,6.30,9.30]
    }
},{timestamps:true})


const Screen=mongoose.model('Screen',screenSchema)

export default Screen