
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
        default:['11am','2pm','6pm','9pm']
    }
},{timestamps:true})


const Screen=mongoose.model('Screen',screenSchema)

export default Screen