import asyncHandler from 'express-async-handler'
import Razorpay from 'razorpay'
import Order from '../models/reservation.js'

let instance = new Razorpay({
    key_id: `${process.env.RAZOR_PAY_KEY_ID}`,
    key_secret: `${process.env.RAZOR_PAY_KEY_SECRET}`,
});

export const createOrder = asyncHandler(async (req,res)=>{
    const orderData=req.body

    const order=new Order(orderData)

    const createdOrder=await order.save()
    if (createdOrder) return res.status(201).json(createdOrder)
    res.status(404).json({error:'Operation failed'})
})

// export const createOrder=asyncHandler(async (req,res)=>{
//     try {
//         const options = {
//           amount: req.body.amount*100, 
//           currency: "INR",
//           receipt: "receipt#1",
//           payment_capture: 0,
//         };
//       instance.orders.create(options, async function (err, order) {
//           console.log(options);
//         if (err) {
//           return res.status(500).json({
//             message: "Something Went Wrong",
//           });
//         }
      
//     console.log(order);
//      });
//     } catch (err) {
//       return res.status(500).json({
//         message: "Something Went Wrong",
//       });
//      }
//     });

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



