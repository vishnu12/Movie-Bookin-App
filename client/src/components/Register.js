import React,{useEffect} from 'react';
import { useFormik } from 'formik';
import {useSelector,useDispatch} from 'react-redux'
import {userRegister} from '../actions/userActions'
 
 
 const validate = values => {
   const errors = {};
   if (!values.name) {
     errors.name = 'Required';
   } else if (values.name.length > 15) {
     errors.name = 'Must be 15 characters or less';
   }
 
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }

   if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 5) {
    errors.password = 'Password must be atlease 5 characters';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  }else if (values.confirmPassword!==values.password) {
    errors.confirmPassword = 'Passwords do not match';
  }
 
   return errors;
 };
 
 const ErrorDiv=({children})=>{
    return <div className='error-div col-md-6 m-auto'>
            {children}
          </div>
    }

 const SignupForm = ({history}) => {

    const dispatch=useDispatch()
    const register=useSelector(state=>state.register)

    const {loading,error,message,user} =register

    useEffect(()=>{
      if(user){
          alert('User registration succesful')
          history.push('/login')
      }
    },[dispatch,user,message])
    
   const formik = useFormik({
     initialValues: {
       name: '',
       email: '',
       password:'',
       confirmPassword:''
     },
     validate,
     onSubmit: values => {
        dispatch(userRegister(values))
     },
   });
   return (
       <>
       {
           error && <ErrorDiv>{error}</ErrorDiv>
       }
     <form onSubmit={formik.handleSubmit} className='reg-form col-md-6 m-auto'>
      
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
         placeholder='Enter name'
         className='form-control'
       />
       {formik.errors.name ? <div>{formik.errors.name}</div> : null}
       
      
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         placeholder='Enter email'
         className='form-control'
       />
       {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
         placeholder='Enter password'
         className='form-control'
       />
       {formik.errors.password ? <div>{formik.errors.password}</div> : null}
       <input
         id="confirmPassword"
         name="confirmPassword"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.confirmPassword}
         placeholder='Enter password to confirm'
         className='form-control'
       />
       {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}
       <button type="submit" className='btn btn-dark'>Register</button>
     </form>
     </>
   );
 };

 export default SignupForm
