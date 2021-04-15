import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {getMovieById} from '../../src/actions/movieActions'
import {ORDER_UPDATE_RESET,ORDER_CREATE_RESET} from '../constants/orderConstants'
import {SET_DATE} from '../constants/dateConstants'

const Header = () => {

    const dispatch=useDispatch()

    let date=new Date() 

    let weekday=new Array(7)
    weekday[0] = "SUN";
    weekday[1] = "MON";
    weekday[2] = "TUE";
    weekday[3] = "WED";
    weekday[4] = "THU";
    weekday[5] = "FRI";
    weekday[6] = "SAT";

    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
// var n = month[d.getMonth()];

    const [toggle1, setToggle1] = useState(true)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
    
    useEffect(()=>{
        dispatch({
            type:SET_DATE,
            payload:{
                date:date.getDate(),
                day:weekday[date.getDay()],
                month:month[date.getMonth()]
            }
        })
    },[])

    
  
    return <div className="choose-header">
        <div className={`child ${toggle1 ? 'active' : ''}`} onClick={() => {
            setToggle1(!toggle1)
            setToggle2(toggle2 ? !toggle2 : toggle2)
            setToggle3(toggle3 ? !toggle3 : toggle3)
            dispatch({
                type:SET_DATE,
                payload:{
                    date:date.getDate(),
                    day:weekday[date.getDay()],
                    month:month[date.getMonth()]
                }
            })
        }}>
            <h5>{date.getDate()}</h5>
            <h5>{weekday[date.getDay()]}</h5>
        </div>
        <div className={`child ${toggle2 ? 'active' : ''}`} onClick={() => {
            setToggle2(!toggle2)
            setToggle1(toggle1 ? !toggle1 : toggle1)
            setToggle3(toggle3 ? !toggle3 : toggle3)
            dispatch({
                type:SET_DATE,
                payload:{
                    date:date.getDate()+1,
                    day:weekday[date.getDay()+1],
                    month:month[date.getMonth()]
                }
            })
        }}>
           <h5>{date.getDate()+1}</h5>
            <h5>{weekday[date.getDay()+1]}</h5>
        </div>
        <div className={`child ${toggle3 ? 'active' : ''}`} onClick={() => {
            setToggle3(!toggle3)
            setToggle1(toggle1 ? !toggle1 : toggle1)
            setToggle2(toggle2 ? !toggle2 : toggle2)
            dispatch({
                type:SET_DATE,
                payload:{
                    date:date.getDate()+2,
                    day:weekday[date.getDay()+2],
                    month:month[date.getMonth()]
                }
            })
        }}>
            <h5>{date.getDate()+2}</h5>
            <h5>{weekday[date.getDay()+2]}</h5>
        </div>
    </div>
}



const TimeDiv=({screen,movieId})=>{

    const disableBtn=useSelector(state=>state.disableBtn)
    const {disable,value} =disableBtn
    const disableItem=(args)=>{
        return args==0 && disable && (value==='1'||value==='12'||value==='123'||value==='1234')?true
        :
        args===1 && disable && (value==='12'||value==='123'||value==='1234')?true
        :
        args===2 && disable && (value==='123'||value==='1234')?true
        :
        args===3 && disable && (value==='1234')?true
        :
        false
    }
  return(
      <>
      {screen && screen.map((itm,k)=>{
          return <div key={k} className="container time-container">
              <h3 style={{color: 'red'}}>{itm.name}</h3>
             {
              itm.timing && itm.timing.map((time,i)=>{
                   return <Link key={i} to={`/book/seats/${itm._id}/${movieId}?time=${time}`}>
                       <button className='btn btn-success bg-transparent time-btn'
                       disabled={disableItem(i)}
                       >{time}</button>
                       </Link>
               })  
             }
          </div>
      })}
      </>
  )
    
}


const ChooseTheatre = ({match,history}) => { 
    const dispatch=useDispatch()

   const userLogin=useSelector(state=>state.userLogin)
   const {user} =userLogin
    useEffect(()=>{
      if(!user){
        history.push(`/login`)
      }  
      dispatch({type:ORDER_CREATE_RESET})
      dispatch({type:ORDER_UPDATE_RESET})
      dispatch(getMovieById(match.params.id))
    },[match,dispatch,history])

    const movieById=useSelector(state=>state.movieById)
    const {movie}=movieById
    const screen=movie && movie.screens && movie.screens.map((item,indx)=>{
        return {
            name:item.screen.name,
            timing:item.screen.show_timing,
            _id:item.screen._id
        }
    })

   
    return (
        <>
            <Header />
            <TimeDiv screen={screen} movieId={match.params.id}/>
        </>
    )
}

export default ChooseTheatre
