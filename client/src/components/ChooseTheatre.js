import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {getMovieById} from '../../src/actions/movieActions'

const Header = () => {

    let weekday=new Array(7)
    weekday[0] = "SUN";
    weekday[1] = "MON";
    weekday[2] = "TUE";
    weekday[3] = "WED";
    weekday[4] = "THU";
    weekday[5] = "FRI";
    weekday[6] = "SAT";

    const [toggle1, setToggle1] = useState(true)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)

    let date=new Date() 
  
    return <div className="choose-header">
        <div className={`child ${toggle1 ? 'active' : ''}`} onClick={() => {
            setToggle1(!toggle1)
            setToggle2(toggle2 ? !toggle2 : toggle2)
            setToggle3(toggle3 ? !toggle3 : toggle3)
        }}>
            <h5>{date.getDate()}</h5>
            <h5>{weekday[date.getDay()]}</h5>
        </div>
        <div className={`child ${toggle2 ? 'active' : ''}`} onClick={() => {
            setToggle2(!toggle2)
            setToggle1(toggle1 ? !toggle1 : toggle1)
            setToggle3(toggle3 ? !toggle3 : toggle3)
        }}>
           <h5>{date.getDate()+1}</h5>
            <h5>{weekday[date.getDay()+1]}</h5>
        </div>
        <div className={`child ${toggle3 ? 'active' : ''}`} onClick={() => {
            setToggle3(!toggle3)
            setToggle1(toggle1 ? !toggle1 : toggle1)
            setToggle2(toggle2 ? !toggle2 : toggle2)
        }}>
            <h5>{date.getDate()+2}</h5>
            <h5>{weekday[date.getDay()+2]}</h5>
        </div>
    </div>
}


const TimeDiv=({screen,movieId})=>{
  return(
      <>
      {screen && screen.map((itm,k)=>{
          return <div key={k} className="container time-container">
              <h3 style={{color: 'red'}}>{itm.name}</h3>
             {
              itm.timing && itm.timing.map((time,i)=>{
                   return <Link key={i} to={`/book/seats/${itm._id}/${movieId}?time=${time}`}><button className='btn btn-success bg-transparent'>{time}</button></Link>
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
