import React from 'react';
import {useDispatch} from 'react-redux'
import './App.css';
import Navbar from './components/Navbar';
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home';
import DetailsPage from './components/DetailsPage';
import Footer from './components/Footer';
import Login from './components/Login';
import ModalComp from './components/ModalComp';
import Register from './components/Register'

function App() {
  const dispatch=useDispatch()
  return (
    <>
    {
      document.addEventListener('click',()=>dispatch({type:'CLOSE_MODAL'}))
    }
    <Navbar />
    <main>
    <ModalComp />
   <Switch>
     <Route exact path='/' component={Home}/>
     <Route path='/details/:id' component={DetailsPage}/>
     <Route path='/login' component={Login}/>
     <Route path='/register' component={Register}/>
   </Switch>
   </main>
   <Footer />
   </>
  );
}

export default App;
