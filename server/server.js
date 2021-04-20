
import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import movieRoutes from './routes/movieRoutes.js'
import userRoutes from './routes/userRoutes.js'
import screenRoutes from './routes/screenRoutes.js'
import uploadRoute from './routes/uploadRoute.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()
connectDB()

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))


const __dirname=path.resolve()
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))


app.get('/get-key',(req,res)=>{
    let key=process.env.RAZOR_PAY_KEY_ID
    res.json({key_id:key})
})

app.use('/movies',movieRoutes)
app.use('/user',userRoutes)
app.use('/screen',screenRoutes)
app.use('/upload',uploadRoute)
app.use('/order',orderRoutes)


if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'..','/client/build')))
    app.use('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'..','client','build','index.html'))
    })
 }else{
     app.get('/',(req,res)=>{
         res.send('API is running')
     })
 }


const port = process.env.PORT || 3001
app.listen(port,()=>console.log(`server running on port ${port}`))