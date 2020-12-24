import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { MdReorder } from "react-icons/md";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions';



const Navbar = () => {


  const dispatch=useDispatch()
  const userLogin=useSelector(state=>state.userLogin)
  const {user}=userLogin

  const logoutHandler=()=>{
   dispatch(logout())
  }

 
  return (
    <header className='header-nav bg-light'>
        <div className="col-md-8">
          <Link to='/'>
        <img style={{height:'75px'}} src='https://www.thefashionstation.in/wp-content/uploads/2019/07/bookmyshow-1-1600x757.png' alt='icon'/>
        </Link>
        <input type='text' placeholder='search for movies'/>
        
        </div>
        <div className="col-md-4 child-2">
  {user && user.isAdmin &&
  <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Admin
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link className="dropdown-item" to="/screens">Screens</Link>
    <Link className="dropdown-item" to="/Movies">Movies</Link>
    <Link className="dropdown-item" to="/bookings">Bookings</Link>
  </div>
</div>
  }        
  {user && <h8 className='mr-2'>Welcome {user.name}</h8>}
           {
             !user?
             <Link to='/login'><button className='btn btn-outline-dark login-btn'>Sign In</button></Link> 
             :
             <button className='btn btn-outline-dark' onClick={()=>logoutHandler()}>Logout</button>
           }
            <IconContext.Provider value={{ color: "black", className: "global-class-name",size:'25px',style:{cursor:'pointer'} }}>
                        <span className='icon-btn' onClick={()=>dispatch({type:'MODAL_SHIFT'})}>
                            <MdReorder />
                        </span>
             </IconContext.Provider>
        </div>
    </header>
  )
}

export default Navbar
