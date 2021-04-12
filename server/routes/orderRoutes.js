import express from 'express'
import { createOrder } from '../controllers/orderController.js'
import {getOrderPerScreen,deleteOrder,updatePayment,deleteAll} from '../controllers/orderController.js'


const router=express.Router()


router.post('/create',createOrder)

router.get('/find/:id/:time/:date',getOrderPerScreen)

router.delete('/:id',deleteOrder)

router.put('/update/:id',updatePayment)

router.delete('/delete/all',deleteAll)

export default router