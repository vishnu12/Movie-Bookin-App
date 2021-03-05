
import mongoose from 'mongoose'

const playingScreenSchema=mongoose.Schema({
    screen:{
        type:mongoose.Types.ObjectId,
        ref:'Screen',
        
    }
},{timestamps:true})

const reviewSchema=mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
    },
    rating:{type:Number},
    comment:{type:String}
},{timestamps:true})

const actorsSchema=mongoose.Schema({
   name:{type:String,required:true},
   image:{type:String},
   charactor:{type:String}
},{timestamps:true})

const crewSchema=mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String},
    role:{type:String,required:true}
},{timestamps:true})

const movieSchema=mongoose.Schema({

    name:{type:String,required:true},

    about:{type:String,required:true},

    cast:[actorsSchema],

    crew:[crewSchema],
    
    screens:[playingScreenSchema],

    image:{
        type:String,
        required:true
    },
    trailer:{type:String},
    rating:{
        type:Number,
        
    },
    numReviews:{
        type:Number,
        required:true,
        default:0
    },
    reviews:[reviewSchema]

},{timestamps:true})


const Movie=mongoose.model('Movie',movieSchema)

export default Movie