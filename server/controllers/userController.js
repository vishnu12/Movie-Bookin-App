import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'

export const login=asyncHandler(async (req,res)=>{
    const {email,password}=req.body
    const user=await User.findOne({email})
    if(!user) return res.status(404).json({message:'No user found'})
    if(await (user.matchPassword(password))){
        const token=await jwt.sign({id:user._id},process.env.SECRET,{expiresIn:'1d'})
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token,
            isAdmin:user.isAdmin
        })
    }else{
       res.status(401).json({message:'Invalid username or password'})
    }
    

})


export const signup=asyncHandler(async (req,res)=>{
    const {name,email,password}=req.body
    const userExists=await User.findOne({email})
    if(userExists) return res.status(400).json({message:'User already exists'})

    const user=new User({name,email,password})
    const savedUser=await user.save()
    if(!savedUser) return res.status(422).json({message:'Signup failed'})
    savedUser.password=undefined
    res.json({savedUser,message:'User registered successfully'})
})