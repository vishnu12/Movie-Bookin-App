import React from 'react'

const Rating = ({rating}) => {
  return (
    <div className='rating mb-2' style={{color:'yellow'}}>
      <span>{rating>1?<i className='fas fa-star'></i>:rating>0.5?<i className='fas fa-start-half'></i>
      :'No Reviews yet'}</span>
      <span>{rating>2?<i className='fas fa-star'></i>:rating>1.5?<i className='fas fa-start-half'></i>
      :''}</span>
      <span>{rating>3?<i className='fas fa-star'></i>:rating>2.5?<i className='fas fa-start-half'></i>
      :''}</span>
      <span>{rating>4?<i className='fas fa-star'></i>:rating>3.5?<i className='fas fa-start-half'></i>
      :''}</span>
      <span>{rating>5?<i className='fas fa-star'></i>:rating>4.5?<i className='fas fa-start-half'></i>
      :''}</span>
    </div>
  )
}

export default Rating
