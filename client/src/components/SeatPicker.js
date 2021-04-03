import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {createOrderPay,findOrderScreen} from '../../src/actions/orderActions'
import {ORDER_DELETE_RESET} from '../constants/orderConstants'

const DrawGrid=({seat,reserved,available,clickData})=>{
  return (
    <table className='grid'>
   <tbody>
     <tr>
       {
         seat.map(row=>{
           return <td 
           className={reserved.indexOf(row) > -1? 'reserved': 'available'}
           key={row} onClick={() =>clickData(row)}>{row}</td>
         })
       }
     </tr>
   </tbody>
    </table>
  )
}

const SeatPicker = ({location,match,history}) => {

  const time=location.search.split('=')[1]
  const screenId=match.params.screenId
  const movieId=match.params.movieId
  const dispatch =useDispatch()
  
  const userLogin=useSelector(state=>state.userLogin)
  const {user}=userLogin

  const createOrder=useSelector(state=>state.createOrder)
  const {loading,success,order}=createOrder

   const [seat, setSeat] = useState([
     '1A','2A','3A','4A','5A',
     '1B','2B','3B','4B','5B',
     '1C','2C','3C','4C','5C',
     '1D','2D','3D','4D','5D',
     '1E','2E','3E','4E','5E',
     '1F','2F','3F','4F','5F',
     '1G','2G','3G','4G','5G',
     '1H','2H','3H','4H','5H',
     '1I','2I','3I','4I','5I',
     '1J','2J','3J','4J','5J',
   ])

   const [available, setAvailable] = useState([
    '1A','2A','3A','4A','5A',
    '1B','2B','3B','4B','5B',
    '1C','2C','3C','4C','5C',
    '1D','2D','3D','4D','5D',
    '1E','2E','3E','4E','5E',
    '1F','2F','3F','4F','5F',
    '1G','2G','3G','4G','5G',
    '1H','2H','3H','4H','5H',
    '1I','2I','3I','4I','5I',
    '1J','2J','3J','4J','5J',
   ])

   const [reserved, setReserved] = useState([])

  let ticketPrice=100
  let gst=0.12
  let noOfTickets=reserved.length
  let grandTotal=ticketPrice*noOfTickets+gst*ticketPrice*noOfTickets
  
  let orderData={
    user:user._id,
    amount:grandTotal,
    screen:screenId,
    movie:movieId,
    seats:reserved,
    show_time:time
  }

   const clickData=(chosenSeat)=>{
    if(reserved.indexOf(chosenSeat)>-1){
      setAvailable(available.concat(seat))
      setReserved(reserved.filter(res=>res!=chosenSeat))
    }else{
      setReserved(reserved.concat(chosenSeat))
      setAvailable(available.filter(res=>res!=chosenSeat))
    }
   
   }

   const createOrderFunc=(order) =>{
     dispatch(createOrderPay(order))
   }

   
  const findOrder=useSelector(state=>state.findOrder)
  const {order:getOrder}=findOrder

  const disableSeats=(data) =>{
   
    if(data.length===0){
      setReserved([])
    }else{
      data.map(itm=>{
        setReserved(reserved.concat(itm.seats.map(itm2=>itm2)))
      })
    }
    
  } 

  
  useEffect(()=>{
    dispatch({type:ORDER_DELETE_RESET})
   if(success){
    history.push('/payment')
   }else{
    dispatch(findOrderScreen(screenId,time))
   }
   
  },[dispatch,location,match,success])

  useEffect(() => {
    if(getOrder){
      disableSeats(getOrder)
    }
  }, [getOrder])

  console.log(reserved);

  return (
    <div className="container choose-seat-container">
    <div className="choose-seats col-md-8">
     <h2>Select the seats</h2> 
    <DrawGrid
    seat={seat}
    reserved={reserved}
    available={available}
    clickData={clickData}
    />
    </div>

    <div className="payment-total col-md-4">
    <ul className="list-group">
    <li className="list-group-item">
     <div className="row">
      <div className="col-8">Ticket Price</div>
      <div className="col-4">{ticketPrice*noOfTickets}</div>
     </div>
      </li>
    <li className="list-group-item">
    <div className="row">
      <div className="col-8">GST</div>
      <div className="col-4">{(ticketPrice*gst*noOfTickets).toFixed(2)}</div>
     </div>
    </li>
    <li className="list-group-item">
    <div className="row">
      <div className="col-8">Grand Total</div>
      <div className="col-4">{grandTotal}</div>
     </div>
    </li>
    <li className="list-group-item"><button type="button" onClick={()=>createOrderFunc(orderData)} className="btn btn-outline-dark w-100">Proceed To Pay</button></li>
    
</ul>
    </div>
    </div>
  )
}

export default SeatPicker
