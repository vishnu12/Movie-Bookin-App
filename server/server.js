
import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import movieRoutes from './routes/movieRoutes.js'
import userRoutes from './routes/userRoutes.js'
import screenRoutes from './routes/screenRoutes.js'
import uploadRoute from './routes/uploadRoute.js'

dotenv.config()
const app=express()
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


const __dirname=path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

app.use('/movies',movieRoutes)
app.use('/user',userRoutes)
app.use('/screen',screenRoutes)
app.use('/upload',uploadRoute)


const port = process.env.PORT || 3001
app.listen(port,()=>console.log(`server running on port ${port}`))