
import axios from 'axios'
import {
MOVIE_LIST_FAIL,
MOVIE_LIST_REQUEST,
MOVIE_LIST_SUCCESS,
MOVIE_BY_ID_FAIL,
MOVIE_BY_ID_REQUEST,
MOVIE_BY_ID_SUCCESS,
ADD_REVIEW_FAIL,
ADD_REVIEW_REQUEST,
ADD_REVIEW_SUCCESS,
MOVIE_ADD_FAIL,
MOVIE_ADD_REQUEST,
MOVIE_ADD_SUCCESS,
MOVIE_DELETE_FAIL,
MOVIE_DELETE_REQUEST,
MOVIE_DELETE_SUCCESS
} from '../constants/movieConstants'


export const movieListAll=()=>async (dispatch)=>{

    try {
        dispatch({type:MOVIE_LIST_REQUEST})

        const {data}=await axios.get('/movies/all')
        dispatch({
            type:MOVIE_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:MOVIE_LIST_FAIL,
            payload:error.response && error.response.data.message?
            error.response.data.message : error.message
        })
    }
}

export const getMovieById=(id)=>async (dispatch)=>{

    try {
        dispatch({type:MOVIE_BY_ID_REQUEST})

        const {data}=await axios.get(`/movies/${id}`)

        dispatch({
            type:MOVIE_BY_ID_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:MOVIE_BY_ID_FAIL,
            payload:error.response && error.response.data.message?
            error.response.data.message : error.message
        })
    }
}

export const addReviewToMovie=(id,review)=>async (dispatch,getState)=>{

    try {

       const {userLogin:{user}}=getState()

        dispatch({type:ADD_REVIEW_REQUEST})

        const config={
            headers:{
                authorization:`Bearer ${user.token}`
            }
        }

        await axios.post(`/movies/${id}/add-review`,review,config)
        dispatch({
            type:ADD_REVIEW_SUCCESS
           
        })
    } catch (error) {
        dispatch({
            type:ADD_REVIEW_FAIL,
            payload:error.response && error.response.data.message?
            error.response.data.message : error.message
        })
    }
}



export const addMovieToDB=(movie)=>async (dispatch,getState)=>{

    try {

       const {userLogin:{user}}=getState()

        dispatch({type:MOVIE_ADD_REQUEST})

        const config={
            headers:{
                authorization:`Bearer ${user.token}`
            }
        }

        await axios.post(`/movies/add`,movie,config)
        dispatch({
            type:MOVIE_ADD_SUCCESS
           
        })
    } catch (error) {
        dispatch({
            type:MOVIE_ADD_FAIL,
            payload:error.response && error.response.data.message?
            error.response.data.message : error.message
        })
    }
}


export const deleteMovieFromDB=(id)=>async (dispatch,getState)=>{

    try {

       const {userLogin:{user}}=getState()

        dispatch({type:MOVIE_DELETE_REQUEST})

        const config={
            headers:{
                authorization:`Bearer ${user.token}`
            }
        }

        await axios.delete(`/movies/${id}`,config)
        dispatch({
            type:MOVIE_DELETE_SUCCESS
           
        })
    } catch (error) {
        dispatch({
            type:MOVIE_DELETE_FAIL,
            payload:error.response && error.response.data.message?
            error.response.data.message : error.message
        })
    }
}



