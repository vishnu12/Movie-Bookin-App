import express from 'express'
import { addScreen, listAllScreens,deleteScreen} from '../controllers/screenController.js'
import { isAdmin, isSignedIn } from '../middlewares/auth.js'



const router=express.Router()

router.get('/all',isSignedIn,isAdmin,listAllScreens)

router.post('/add-screen',isSignedIn,isAdmin,addScreen)

router.delete('/:id',isSignedIn,isAdmin,deleteScreen)


export default router