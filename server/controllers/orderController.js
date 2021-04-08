import asyncHandler from 'express-async-handler'
import Order from '../models/reservation.js'

export const createOrder = asyncHandler(async (req,res)=>{
    const orderData=req.body

    const order=new Order(orderData)

    const createdOrder=await order.save()
    if (createdOrder) return res.status(201).json(createdOrder)
    res.status(404).json({error:'Operation failed'})
})

 

export const getOrderPerScreen=asyncHandler(async (req,res) => {

    let screenId=req.params.id
    let show_time=req.params.time
    const order=await Order.find({$and:[{'screen':screenId},{'show_time':show_time}]})
                            .populate('user','name')
    if (order) return res.status(200).json(order)
    res.status(404).json({error:'Not found'})
})


export const deleteOrder=asyncHandler(async (req,res)=>{

    const order =await Order.findById(req.params.id)
    if(order) await order.remove()
    res.status(200).json({message:'Order removed'})
})


export const updatePayment=asyncHandler(async(req,res)=>{
    const id=req.params.id
    const updatedOrder=await Order.findByIdAndUpdate(id,{payment_status:'Paid'},{new:true})
    if(updatePayment) return res.status(201).json(updatedOrder)
    res.status(400).json({error:'Update failed'})
})






