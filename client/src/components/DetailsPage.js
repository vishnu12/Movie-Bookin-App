import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import {getMovieById} from '../actions/movieActions'
import {DynamicRating} from './DynamicRating'
import Rating from './Rating'
import {addReviewToMovie} from '../actions/movieActions'

const DetailsPage = ({match}) => {

  const dispatch=useDispatch()
  const movieId=match.params.id

  
  const movieById=useSelector(state=>state.movieById)

  const ratingReducer=useSelector(state=>state.ratingReducer)
   const {rating}=ratingReducer

   const userLogin=useSelector(state=>state.userLogin)
   const {user}=userLogin

   const addReview=useSelector(state=>state.addReview)
   const {loading:reviewLoading,success,error:reviewError}=addReview

  const {loading,error,movie}=movieById
  
  const para=`${movie && movie.about}`
  const slicedPara=para.slice(0,65)

 
  const [toggle, setToggle] = useState(false)
  const [comment,setComment]=useState('')

  const submit=e=>{
    e.preventDefault()
    let data={
      rating:rating+1,
      comment:comment
    }
    dispatch(addReviewToMovie(movieId,data))

  }

  
  useEffect(()=>{
    dispatch(getMovieById(movieId))
  },[match,movieId,dispatch,success])


  return (
    <div className='details-section'>
      
      <div className='poster-section'>
      <iframe width="100%" height="400vh" 
      src={movie && movie.trailer} frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowFullScreen></iframe>
      </div>
    
    <div className='row'>
<div className='col-12 col-md-8'>
<div className='about-section my-3 mb-2'>
          <h3>About the movie</h3>
          {
             movie && <p>{!toggle?slicedPara+'...':para+'.'}<a style={{textDecoration:'none',cursor:'pointer'}} 
              className='info' onClick={()=>setToggle(!toggle)}>{!toggle?'More':'Less'}</a></p>
          }
      </div>
      <h3 className='mt-3'>Cast</h3>
      <div className='cast-section'>
        {
          movie && movie.cast && movie.cast.map((item,k)=>{
            return <div className='artist' key={k}>
            <img src={item.image} className='rounded-circle' alt='pic'/>
            <h5>{item.name}</h5>
            <p>as {item.charactor}</p>

          </div>
          })
        }
      </div>
       <h3 className='mt-3'>Crew</h3>
      <div className='crew-section'>
      {
          movie && movie.crew && movie.crew.map((item,k)=>{
            return <div className='artist' key={k}>
            <img src={item.image} className='rounded-circle' alt='pic'/>
            <h5>{item.name}</h5>
            <p>{item.role}</p>
          </div>
          })
        }
      </div>
</div>
<div className='col-12 col-md-4 review-container' style={{marginTop:'2rem'}}>
<Link to={`/book/${movie && movie._id}`} className='btn btn-danger' style={{width:'10rem'}}>Book Tickets</Link>
<h3 className='mt-3 text-center'>Reviews</h3>
{
  user?
  <form className='col-9 d-flex mt-5 comment-tab' onSubmit={submit}>
<input type='text' className='mr-2 form-control' onChange={e=>setComment(e.target.value)}/>
<DynamicRating />
<button type='submit' className='btn btn-outline-dark ml-2 p-1 w-25'>ADD</button>
</form>
:
<h5>Please <Link to={`/login?redirect=/details/${movieId}`}>login</Link> to write comment</h5>
}

<div className='reviews-tab mt-5'>
{
  movie && movie.reviews && movie.reviews.map((review,index)=>{
    return <div key={index} className='mb-3 mt-2'>
          <div className='d-flex'>
          <h5>{review.user.name}</h5> 
          <Rating rating={review.rating}/>
          </div>
          <p><small>{review.comment}</small></p>
          </div>
  })
}
</div>

</div>
    </div>
      
    </div>
  )
}

export default DetailsPage
