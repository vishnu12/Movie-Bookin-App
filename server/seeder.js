import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {screenData} from './data/screenData.js'
import {movieData} from './data/movieData.js'
import Movie from './models/movie.js'
import Screen from './models/screen.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData=async()=>{
    try {
        await Screen.deleteMany()
        await Movie.deleteMany()
        const createdScreen=await Screen.insertMany(screenData)
        const screen=createdScreen[0]._id
        const movies=movieData.map(movie=>{
            return {
                ...movie,
                screens:[screen]
            }
        })
        await Movie.insertMany(movies)
        console.log('Data inserted');
        process.exit()
    } catch (error) {
        console.log(`${error}`);
        process.exit(1)
    }
}

const destroyData=async()=>{
    try {
        await Screen.deleteMany()
        await Movie.deleteMany()
        console.log('Data destroyed');
        process.exit()
    } catch (error) {
        console.log(`${error}`);
        process.exit(1)
    }
}

if(process.argv[2]==='-d'){
    destroyData()
}else{
    importData()
}
