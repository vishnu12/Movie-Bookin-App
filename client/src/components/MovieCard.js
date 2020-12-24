import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const MovieCard = ({image,movie,rating}) => {
  return (
    <>
     <div className="card" style={{width: '18rem'}}>
  <img src={image} className="card-img-top" alt="poster" style={{width:'100%',height:'300px'}}/>
  <div className="card-body">
    <h5 className="card-title">{movie}</h5>
    <Rating rating={rating}/>
  <Link to='/book' className='btn btn-danger card-btn'>Book Now</Link> 
  </div>
</div> 
    </>
  )
}

export default MovieCard
