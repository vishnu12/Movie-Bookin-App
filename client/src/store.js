
import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {
    userLoginReducer,
    userRegisterReducer
   } from './reducers/userReducers'
import {
        movieListReducer,
        movieByIdReducer,
        addReviewReducer,
        addMovieReducer,
        deleteMovieReducer
       } from './reducers/movieReducers'

import {ratingReducer} from './reducers/ratingReducer'
import {viewScreensReducer,
        addScreensReducer,
        deleteScreensReducer
} from './reducers/screenReducers'

import {
    createOrderReducer,
    findOrderReducer,
    deleteOrderReducer,
    updateOrderReducer
} from './reducers/orderReducer'

import {dateReducer} from './reducers/dateReducer'
import {btnDisableReducer} from './reducers/btnReducer'
import {modalShiftReducer} from './reducers/modalReducer'

const reducer=combineReducers({
    userLogin:userLoginReducer,
    movieList:movieListReducer,
    movieById:movieByIdReducer,
    register:userRegisterReducer,
    ratingReducer,
    dateFinder:dateReducer,
    addReview:addReviewReducer,
    screensList:viewScreensReducer,
    createScreen:addScreensReducer,
    deleteScreen:deleteScreensReducer,
    addMovie:addMovieReducer,
    deleteMovie:deleteMovieReducer,
    createOrder:createOrderReducer,
    findOrder:findOrderReducer,
    deleteOrder:deleteOrderReducer,
    updateOrder:updateOrderReducer,
    disableBtn:btnDisableReducer,
    modalShift:modalShiftReducer
    
})


const userFormStorage=localStorage.getItem('user')?
JSON.parse(localStorage.getItem('user')):null

const disableStatusFromStorage=localStorage.getItem('DISB_TIMNG')?
JSON.parse(localStorage.getItem('DISB_TIMNG')):''

const initialState={
   userLogin:{user:userFormStorage}, 
   disableBtn:disableStatusFromStorage
}
const middleware=[thunk]

const store=createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store