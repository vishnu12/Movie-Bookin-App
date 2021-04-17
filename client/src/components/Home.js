import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import Carousal from './Carousal'
import MovieCard from './MovieCard'
import SideMenu from './SideMenu'
import {movieListAll} from '../actions/movieActions'



const Home = () => {

const dispatch=useDispatch() 

const movieList=useSelector(state=>state.movieList)

const {loading,error,movies}=movieList


useEffect(()=>{
  dispatch(movieListAll())
},[dispatch])

  return (
    <section className='home'>
   <Carousal />
   <div className='container-fluid'>
<div className='row'>
<div className="col-md-3">
<SideMenu />
</div>
<div className="col-md-9">
<div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
<h4 className='mt-5'>Movies</h4>
<a className='mt-3' style={{textDecoration:'none'}}>View more</a>
</div>
<div className="row">
    {
      movies && movies.map(item=>{
        return <div className="col-md-4" key={item._id}>
               <Link to={`/details/${item._id}`} style={{textDecoration:'none',textAlign:"center"}}><MovieCard 
               id={item._id}
               image={item.image}
               movie={item.name}
               rating={item.reviews.reduce((acc,itm)=>acc+itm.rating,0)/item.reviews.length} /></Link>
               </div>
      })
    }
    
</div>
</div>
</div>
   </div>
   </section>
  )
}

export default Home
