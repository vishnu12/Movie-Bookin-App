import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Switch,Route} from 'react-router-dom'
import Home from './components/Home';
import DetailsPage from './components/DetailsPage';
import Footer from './components/Footer';
import Login from './components/Login';
import ModalComp from './components/ModalComp';
import Register from './components/Register'
import viewScreens from './components/admin-actions/viewScreens';
import addScreen from './components/admin-actions/addScreen';
import listMovies from './components/admin-actions/listMovies';
import addMovies from './components/admin-actions/addMovies';
import SeatPicker from './components/SeatPicker';
import ChooseTheatre from './components/ChooseTheatre';
import PaymentScreen from './components/PaymentScreen';
import FinalScreen from './components/FinalScreen';
import manageBookings from './components/admin-actions/manageBookings';

function App() {
  return (
    <>
    <Navbar />
    <main>
    <ModalComp />
   <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/search/:keyword' component={Home}/>
     <Route exact path='/details/:id' component={DetailsPage}/>
     <Route exact path='/login' component={Login}/>
     <Route exact path='/register' component={Register}/>
     <Route exact path='/screens' component={viewScreens}/>
     <Route exact path='/add-screen' component={addScreen}/>
     <Route exact path='/movies' component={listMovies}/>
     <Route exact path='/add-movies' component={addMovies}/>
     <Route exact path='/book/:id' component={ChooseTheatre}/>
     <Route exact path='/book/seats/:screenId/:movieId/:time?/:date?' component={SeatPicker}/>
     <Route exact path='/payment' component={PaymentScreen}/>
     <Route exact path='/final' component={FinalScreen}/>
     <Route exact path='/manage-booking' component={manageBookings}/>
   </Switch>
   </main>
   <Footer />
   </>
  );
}

export default App;
