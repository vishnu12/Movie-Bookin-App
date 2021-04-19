import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {DISABLE_BTN,ENABLE_BTN} from '../../constants/btnConstants'
import {deleteAllOrderFunc} from '../../actions/orderActions'

const manageBookings = () => {
  
  const dispatch=useDispatch()  
  const [value, setValue] = useState(null)

  const clearOrders=useSelector(state=>state.clearOrders)

  const {success}=clearOrders

  const handleDisable=()=>{
     dispatch({
         type:DISABLE_BTN,
         payload:value
     }) 
  const data={
      disable:true,
      value
  }
     localStorage.setItem('DISB_TIMNG',JSON.stringify(data))
     alert('selected shows disabled')
  }

  const handleEnable=()=>{
      dispatch({
        type:ENABLE_BTN
      })

      localStorage.removeItem('DISB_TIMNG')
      alert('everything has been enabled')
  }

  const handleClear=()=>{
    if(window.confirm('Are you sure')){
      dispatch(deleteAllOrderFunc())
    }
  }

  useEffect(()=>{
    if(success){
      alert('Clered All form Database')
    }
  })

  return (
    <div className='container'>
    <div className='clear-booking-container'>
      <button className='btn btn-outline-danger' onClick={handleClear}>Clear Bookings</button>
    </div>
    <div className='manage-bookings'>
      <h3>Disable the booking timings</h3>
       <select className="custom-select" onChange={e=>setValue(e.target.value)}>
       <option>select</option>    
       <option value="1">Morning Show</option>
       <option value="12">Noon Show</option>
       <option value="123">First Show</option>
       <option value="1234">Second Show</option>
       </select>
       <button className='btn btn-outline-dark' onClick={handleDisable}>DISABLE</button>
       <button className='btn btn-outline-dark' onClick={handleEnable}>ENABLE</button>
    </div>
    </div>
  )
}

export default manageBookings
