import React from 'react'
import {useSelector} from 'react-redux'

const FinalScreen = ({history}) => {

  const updateOrder=useSelector(state=>state.updateOrder)
  const {updatedOrder}=updateOrder


 const dateArray=updatedOrder && updatedOrder.date && updatedOrder.date.split(',') 


  return (
    <div className='final-screen'>
      <h3>Your payment is successful</h3>
      <div className='success-card'>
       <img src={updatedOrder && updatedOrder.movie && updatedOrder.movie.image} alt='movie-img'/>
      <h5>show at : {updatedOrder && updatedOrder.show_time}</h5>
      <h5>screen : {updatedOrder && updatedOrder.screen && updatedOrder.screen.name}</h5>
      <h5>movie : {updatedOrder && updatedOrder.movie && updatedOrder.movie.name}</h5>
      <h5>date : {dateArray && dateArray[0] && dateArray[0]}th,{dateArray && dateArray[2] && dateArray[2]}</h5>
      </div>
    </div>
  )
}

export default FinalScreen
