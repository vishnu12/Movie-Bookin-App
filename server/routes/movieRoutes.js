import express from 'express'

import {movieList,movieById,addReview,addMovie,deleteMovie} from '../controllers/movieController.js'
import { isAdmin, isSignedIn } from '../middlewares/auth.js'

const router=express.Router()

router.get('/all',movieList)

router.get('/:id',movieById)


router.post('/:id/add-review',isSignedIn,addReview)


router.post('/add',isSignedIn,isAdmin,addMovie)

router.delete('/:id',isSignedIn,isAdmin,deleteMovie)

export default router