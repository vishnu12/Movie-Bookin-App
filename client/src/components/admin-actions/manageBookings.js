import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {DISABLE_BTN,ENABLE_BTN} from '../../constants/btnConstants'

const manageBookings = () => {
  
  const dispatch=useDispatch()  
  const [value, setValue] = useState(null)

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

  return (
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
  )
}

export default manageBookings
