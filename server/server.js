
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import movieRoutes from './routes/movieRoutes.js'
import userRoutes from './routes/userRoutes.js'


dotenv.config()
const app=express()
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/movies',movieRoutes)
app.use('/user',userRoutes)


const port = process.env.PORT || 3001
app.listen(port,()=>console.log(`server running on port ${port}`))