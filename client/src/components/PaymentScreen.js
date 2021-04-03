import React,{useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {deleteOrderFunc} from '../actions/orderActions'
import {ORDER_CREATE_RESET} from '../constants/orderConstants'

const PaymentScreen = () => {

  const dispatch=useDispatch()
  const history =useHistory()

    const createOrder=useSelector(state=>state.createOrder)
    const {order}=createOrder

    const deleteOrder=useSelector(state=>state.deleteOrder)
    const {success:deleteSuccess}=deleteOrder

    useEffect(()=>{
      if(deleteSuccess){
        dispatch({type:ORDER_CREATE_RESET})
        history.goBack()
      }
    },[deleteSuccess])
  const clickHandler=()=>{
     dispatch(deleteOrderFunc(order._id))
  }

  return (
    <div>
      <h1>Payment Screen</h1>
      <button className='btn btn-outline-dark' onClick={()=>clickHandler()}>BACK</button>
    </div>
  )
}

export default PaymentScreen
