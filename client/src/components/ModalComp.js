
import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {IconContext} from 'react-icons'
import { MdReorder } from "react-icons/md";
import {DISABLE_MODAL} from '../constants/modalConstants'

const ModalComp = () => {

  const dispatch=useDispatch()
  const modalShift=useSelector(state=>state.modalShift)
  const {disable}=modalShift

  useEffect(()=>{
   
  },[disable])
  return (
  <div className={`modal-container ${disable?'':'active'}`}>
   <ul className="list-group">
  <li className="list-group-item" style={{display:'flex',justifyContent:'space-between'}}>
    <h2>HEY!</h2>
    <IconContext.Provider value={{ color: "black", className: "global-class-name",size:'25px',style:{cursor:'pointer'} }}>
      <span className='icon-btn'>
          <MdReorder onClick={()=>dispatch({type:DISABLE_MODAL})}/>
      </span>
    </IconContext.Provider>
    </li>
  <li className="list-group-item">
    <h5>Help & Support</h5>
  </li>
  <li className="list-group-item">
  <Link to='/register' className='btn btn-outline-dark link' onClick={()=>dispatch({type:DISABLE_MODAL})}>
     Register
    </Link>
  </li>
</ul>
  </div>
  )
}

export default ModalComp
