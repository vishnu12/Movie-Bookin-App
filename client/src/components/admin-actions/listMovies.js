import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteMovieFromDB, movieListAll } from '../../actions/movieActions'

const listMovies = () => {

    const dispatch=useDispatch() 

    const movieList=useSelector(state=>state.movieList)
    const {loading,error,movies}=movieList
    

    const deleteMovie=useSelector(state=>state.deleteMovie)
    const {loading:deleteLoading,error:deleteError,success}=deleteMovie
    
    useEffect(()=>{
      dispatch(movieListAll())
    },[dispatch,success])
    

   const deleteHandler=(id)=>{
     dispatch(deleteMovieFromDB(id))
   } 

  return (
    
      <div className='row text-center'>
          <div className='col-md-9'>
        <table className='table table-striped table-bordered mt-4'>
      <thead>
          <tr>
              <th>Name</th>
              <th>Screen</th>
              <th></th>
              <th></th>
          </tr>
      </thead>
      <tbody>
          {movies && movies.map((movie,ind)=>{
              return <tr key={ind}>
              <td>{movie.name}</td>
              <td>25</td>
              <td><button className='btn btn-primary'>Update</button></td>
              <td><button className='btn btn-danger' onClick={()=>deleteHandler(movie._id)}>Delete</button></td>
          </tr>
          })}
      </tbody>
        </table>
          </div>

          <div className='col-md-3'>
              <Link to='/add-movies' className='btn btn-primary mt-4 mr-0'>Add Movies</Link>
          </div>
      </div>
    
  )
}

export default listMovies
