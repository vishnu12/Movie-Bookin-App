import express from 'express'
import { createOrder } from '../controllers/orderController.js'
import {getOrderPerScreen,deleteOrder} from '../controllers/orderController.js'


const router=express.Router()


router.post('/create',createOrder)

router.get('/find/:id/:time',getOrderPerScreen)

router.delete('/:id',deleteOrder)

export default router