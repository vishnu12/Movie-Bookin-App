import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {deleteOrderFunc, updateOrderFunc} from '../actions/orderActions'
import {ORDER_CREATE_RESET} from '../constants/orderConstants'



const PaymentScreen = () => {

  const dispatch=useDispatch()
  const history =useHistory()

    const userLogin=useSelector(state=>state.userLogin)
    const {user} =userLogin

    const createOrder=useSelector(state=>state.createOrder)
    const {order}=createOrder

    const updateOrder=useSelector(state=>state.updateOrder)
    const {success:updateSuccess}=updateOrder

    const deleteOrder=useSelector(state=>state.deleteOrder)
    const {success:deleteSuccess}=deleteOrder

    const [key, setKey] = useState('')

    const getRazorPayKey=async ()=>{
      const {data}=await axios.get('/get-key')
      setKey(data.key_id)
  }

    useEffect(()=>{
     if(!user){
       history.push('/')
     }
      if(deleteSuccess){
        dispatch({type:ORDER_CREATE_RESET})
        history.goBack()
      }else if(updateSuccess){
        history.push('/final')
      }else{
        getRazorPayKey()
      }
    },[deleteSuccess,updateSuccess])

  const clickHandler=()=>{
     if(order){
      dispatch(deleteOrderFunc(order._id))
     }else{
       history.goBack()
     }
  }


  const options = {
    key: `${key}`,
    amount: `${order && order.amount*100}`, //  = INR 1
    name: `${user.name}`,
    description: 'ticket payment',
    image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
    handler: function(response) {
        // alert(response.razorpay_payment_id);
        order && dispatch(updateOrderFunc(order._id))
    },
    prefill: {
        name: `${user.name}`,
        contact: '9999999999',
        email: `${user.email}`
    },
    notes: {
        address: 'some address'
    },
    theme: {
        color: 'blue',
        hide_topbar: false
    }
};

const openPayModal = () => {
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
};
useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
}, []);

  return (
    <div className='payment-div'>
      <h3>Please make the payment</h3>
      <button className='btn btn-info pay-btn' onClick={openPayModal} disabled={!order}>Pay {order && order.amount}</button>
      <button className='btn btn-outline-dark back-btn' onClick={()=>clickHandler()}>BACK</button>
    </div>
  )
}

export default PaymentScreen
