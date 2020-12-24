import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/user.js'

export const isSignedIn=asyncHandler(async (req,res,next)=>{

    const token=req.headers.authorization.split(" ")[1]
    if(token){
        try {
            const {id}=await jwt.verify(token,process.env.SECRET)
            req.user=await User.findById(id).select('-password')
            next()
        } catch (error) {
            console.log(error)
        }
    }
    
  
})


export const isAdmin=asyncHandler(async (req,res,next)=>{
   if(req.user && req.user.isAdmin){
       next()
   }else{
       res.status(401).json({message:'Not authorized'})
   }
})
