import asyncHandler from 'express-async-handler'
import Movie from '../models/movie.js'

export const movieList=asyncHandler(async (req,res)=>{

    const keyword=req.query.keyword?{
        name:{
            $regex:req.query.keyword,
            $options:'i'
        }
    }:{}
    const movies=await Movie.find({...keyword})
                 .populate('screens.screen','_id name')
                

    if(movies) return res.status(200).json(movies)
    return res.status(404).json({message:'Not found'})
    
})

export const movieById=asyncHandler(async (req,res)=>{

    const movie=await Movie.findById(req.params.id)
          .populate('reviews.user','_id name')
          .populate('screens.screen','_id name show_timing')
    if(movie) return res.status(200).json(movie)
    return res.status(404).json({message:'Not found'})

})


export const addReview=asyncHandler(async (req,res)=>{
    const movieId=req.params.id
    const {rating,comment}=req.body

    const review={
        user:req.user._id,
        rating:rating,
        comment:comment
    }

    const updateReview=await Movie.findByIdAndUpdate(movieId,{
        $push:{reviews:review}
    },{new:true})
    .populate('reviews.user','_id name')

    if(!updateReview) return res.status.apply(422).json({message:'Could not add review'})
    res.status(201).json(updateReview)
})


// export const getReviews=asyncHandler(async (req,res)=>{
//     let reviews=await 
// })

export const addMovie=asyncHandler(async (req,res)=>{
 
const movie=new Movie(req.body)

const addedMovie=await movie.save()

if(addMovie) return res.status(201).json({message:'Movie added'})

res.status(400).json({error:'Could not add the movie'})

 })


 export const deleteMovie=asyncHandler(async (req,res)=>{
     
    const movie=await Movie.findById(req.params.id)
    await movie.remove()
    res.status(200).json({message:'Movie removed'})
 })