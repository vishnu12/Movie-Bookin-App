import axios from 'axios'
import { 
ORDER_CREATE_FAIL,
ORDER_CREATE_SUCCESS,
ORDER_CREATE_REQUEST,
ORDER_FIND_FAIL,
ORDER_FIND_SUCCESS,
ORDER_FIND_REQUEST,
ORDER_DELETE_FAIL,
ORDER_DELETE_SUCCESS,
ORDER_DELETE_REQUEST
} from '../constants/orderConstants'



export const createOrderPay =(order)=>async (dispatch)=>{
   try {
       dispatch({type:ORDER_CREATE_REQUEST})

       const {data} = await axios.post('/order/create',order,{})

       dispatch({
           type:ORDER_CREATE_SUCCESS,
           payload:data
        })
   } catch (error) {
    dispatch({
        type:ORDER_CREATE_FAIL,
        payload:error.response && error.response.data.message?
        error.response.data.message : error.message
    })
   }
}

export const findOrderScreen =(id,time)=>async (dispatch)=>{
    try {
        dispatch({type:ORDER_FIND_REQUEST})
 
        const {data} = await axios.get(`/order/find/${id}/${time}`)
 
        dispatch({
            type:ORDER_FIND_SUCCESS,
            payload:data
         })
    } catch (error) {
     dispatch({
         type:ORDER_FIND_FAIL,
         payload:error.response && error.response.data.message?
         error.response.data.message : error.message
     })
    }
 }


 export const deleteOrderFunc =(id)=>async (dispatch)=>{
    try {
        dispatch({type:ORDER_DELETE_REQUEST})
 
        await axios.delete(`/order/${id}`)
 
        dispatch({
            type:ORDER_DELETE_SUCCESS,
         })
    } catch (error) {
     dispatch({
         type:ORDER_DELETE_FAIL,
         payload:error.response && error.response.data.message?
         error.response.data.message : error.message
     })
    }
 }