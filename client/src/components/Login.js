import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { login } from '../actions/userActions';


const Login = ({location,history}) => {

const redirect=location.search?location.search.split('=')[1]:'/'
const dispatch=useDispatch()
const ErrorDiv=({children})=>{
return <div className='error-div'>
        {children}
      </div>
}


const userLogin=useSelector(state=>state.userLogin)
const {error,user}=userLogin


useEffect(()=>{
 if(user){
    history.push(redirect)
 }
 if(error){
   alert('Invalid Credentials, Login Failed')
 }
},[history,user,redirect,error])



  return (
    <div>
      <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
           const errors={}
         if (!values.email) {
           errors.email='Email is required'
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email='Invalid Email'
         }else if(!values.password){
           errors.password='Password required'
         }
         return errors
       }}
       onSubmit={(values, { setSubmitting }) => {
         dispatch(login(values))
         setSubmitting(false) 
 
       }}
     >
       {({ isSubmitting }) => (
         <Form className='login-form col-md-6 m-auto'>
           <Field type="email" name="email" className='form-control' placeholder='Enter Email'/>
           <ErrorMessage name="email" component={ErrorDiv}/>
           <Field type="password" name="password" className='form-control mt-2' placeholder='Enter Password'/>
           <ErrorMessage name="password" component={ErrorDiv} />
           <button className='btn btn-dark' type="submit" disabled={isSubmitting}>
             Login
           </button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default Login
