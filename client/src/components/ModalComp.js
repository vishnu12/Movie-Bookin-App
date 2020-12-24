
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'

const ModalComp = () => {

    const modal=useSelector(state=>state.modal)
    const {modalOpen}=modal

  return !modalOpen?'':
  <div className='container modal-container'>
          <div className='row'>
          <ul className='card-list'>
          <li className='card modal-card'>
            <h3>Hey !</h3>
          </li>
          <li className='card modal-card'>
            <Link to='/register' className='btn btn-outline-info w-75'>Login/Register</Link>
          </li>
          <li className='card modal-card'>
            <h6>Book A Smile</h6>
          </li>
          <li className='card modal-card'>
            <h6>Help & Support</h6>
          </li>
      </ul>
          </div>
      </div>   
}

export default ModalComp
