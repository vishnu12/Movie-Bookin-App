
import axios from 'axios'

import {
  SCREEN_LIST_FAIL,
  SCREEN_LIST_REQUEST,
  SCREEN_LIST_SUCCESS,
  SCREEN_ADD_FAIL,
  SCREEN_ADD_REQUEST,
  SCREEN_ADD_SUCCESS,
  SCREEN_DELETE_FAIL,
  SCREEN_DELETE_REQUEST,
  SCREEN_DELETE_SUCCESS
} from '../constants/sreenConstants'



export const listScreens=()=>async (dispatch,getState)=>{
    try {
        const {userLogin:{user}}=getState()

        dispatch({type:SCREEN_LIST_REQUEST})

        const config={
            headers:{
                authorization:`Bearer ${user.token}`
            }
        }
        const {data}=await axios.get('/screen/all',config)
    
        dispatch({
            type:SCREEN_LIST_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:SCREEN_LIST_FAIL,
            payload:error.response && error.response.data.message?
            error.response.data.message : error.message
        })
    }
}

export const createScreens=(screen)=>async (dispatch,getState)=>{
    try {
        const {userLogin:{user}}=getState()

        dispatch({type:SCREEN_ADD_REQUEST})

        const config={
            headers:{
                authorization:`Bearer ${user.token}`
            }
        }
       await axios.post('/screen/add-screen',screen,config)
       
        dispatch({
            type:SCREEN_ADD_SUCCESS,
        })
        
    } catch (error) {
        dispatch({
            type:SCREEN_ADD_FAIL,
            payload:error.response && error.response.data.message?
            error.response.data.message : error.message
        })
    }
}


export const deleteScreens=(id)=>async (dispatch,getState)=>{
    try {
        const {userLogin:{user}}=getState()

        dispatch({type:SCREEN_DELETE_REQUEST})

        const config={
            headers:{
                authorization:`Bearer ${user.token}`
            }
        }
          await axios.delete(`/screen/${id}`,config)
        
        dispatch({
            type:SCREEN_DELETE_SUCCESS
           
        })
        
    } catch (error) {
        dispatch({
            type:SCREEN_DELETE_FAIL,
            payload:error.response && error.response.data.message?
            error.response.data.message : error.message
        })
    }
}
