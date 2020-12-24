
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
ADD_REVIEW_SUCCESS
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
        console.log(data);
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


