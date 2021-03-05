import asyncHandler from 'express-async-handler'
import Screen from '../models/screen.js'


export const listAllScreens=asyncHandler(async (req,res)=>{

    const screens=await Screen.find({})
    if(!screens) return res.status(404).json({message:'Not found'})

    res.status(200).json(screens)
})


export const addScreen=asyncHandler(async (req,res)=>{

    const screen= new Screen({
        name:req.body.name,
        capacity:req.body.capacity,
        movie:req.body.movie
    })

    const savedScreen=await screen.save()
    if(savedScreen){
        res.status(201).json({savedScreen})
    }else{
        res.status(401).json({message:'Unable to save the screen'})
    }
})


export const deleteScreen=asyncHandler(async(req,res)=>{

    await Screen.findByIdAndDelete(req.params.id)
    res.status(200).json({message:'Screen Removed'})
})