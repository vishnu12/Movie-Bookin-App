import express from 'express'

import {movieList,movieById,addReview} from '../controllers/movieController.js'
import { isSignedIn } from '../middlewares/auth.js'

const router=express.Router()

router.get('/all',movieList)

router.get('/:id',movieById)


router.post('/:id/add-review',isSignedIn,addReview)




export default router