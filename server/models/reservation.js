
import mongoose from 'mongoose'


const orderSchema=mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    amount:{type:Number},
    screen:{
        type:mongoose.Types.ObjectId,
        ref:'Screen'
    },
    movie:{
        type:mongoose.Types.ObjectId,
        ref:'Movie'
    },
    seats:{
        type:Array,
        default:[]
    },
    show_time:{type:String}
},{timestamps:true})


const Order=mongoose.model('Order',orderSchema)

export default Order