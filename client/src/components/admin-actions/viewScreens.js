import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { deleteScreens, listScreens } from '../../actions/screenActions'
import {Link} from 'react-router-dom'

const viewScreens = () => {

const dispatch=useDispatch()


const screensList=useSelector(state=>state.screensList)
const {screens,loading,error} =screensList

const deleteScreen=useSelector(state=>state.deleteScreen)
const {success} =deleteScreen


useEffect(()=>{
    dispatch(listScreens())
  },[dispatch,success])
  

const deleteHandler=(id)=>{
    dispatch(deleteScreens(id))
}

  return (
    <>
    {
        error?<p>{error}</p>
        :
        loading?<h4>Loading...</h4>
        :
        <div className='container screen-list-container'>
            <Link to='/add-screen' className='btn btn-primary mr-3'>
            Add Screen
            </Link>
     <div className='row'>
         <div className='col-md-6 m-auto text-center'>
             <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Movie</th>
                <th>Capacity</th>
                <th>Timing</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                screens && screens.map((screen,k)=>{
                    return <tr key={k}>
                <td>{screen.name}</td>
                <td>{screen.movie}</td>
                <td>{screen.capacity}</td>
                <td>{screen.show_timing.map((itm,k)=><p key={k}>{itm}</p>)}</td>
                <td><button className='btn btn-info'>Update</button></td>
                <td><button className='btn btn-danger' onClick={()=>deleteHandler(screen._id)}>Delete</button></td>
            </tr>
                })
            }
        </tbody>
             </table>
         </div>
     </div>
    </div>
    }
    </>
  )
}

export default viewScreens
