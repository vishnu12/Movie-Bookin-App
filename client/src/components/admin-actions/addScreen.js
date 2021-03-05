import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { createScreens } from '../../actions/screenActions'


const addScreen = ({history}) => {

const dispatch=useDispatch()

const [values, setValues] = useState({
  screen:'',
  capacity:0,
  movie:''
})

const {screen,capacity,movie} =values

const createScreen=useSelector(state=>state.createScreen)
const {success}=createScreen

useEffect(()=>{
  if(success){
   history.push('/screens')
  }
},[history,dispatch,success])


const handleChange=e=>{
  const {name,value} =e.target
  setValues({
    ...values,
    [name]:value
  })
}


const handleSubmit=e=>{
  e.preventDefault()
  const screenData={
    name:screen,
    capacity:capacity,
    movie:movie
  }

  dispatch(createScreens(screenData))
}




  return (
    <div className='row mt-5'>
    <form className='m-auto w-50' onSubmit={handleSubmit}>
      <div className='form-group'>
        <input type='text' name='screen' placeholder='Enter screen name'
        className='form-control' onChange={handleChange}/>
      </div>
      <div className='form-group'>
        <input type='number' name='capacity' placeholder='Enter seat capacity'
        className='form-control' min='50' max='200' onChange={handleChange}/>
      </div>
      <div className='form-group'>
        <input type='text' name='movie' placeholder='Enter movie name'
        className='form-control' onChange={handleChange}/>
      </div>

      <div className='form-group'>
       <button className='btn btn-primary w-100' type='submit'>ADD</button>
      </div>
    </form>
    </div>
  )
}

export default addScreen
