
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

import {modalReducer} from './reducers/modelReducer'
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

const reducer=combineReducers({
    userLogin:userLoginReducer,
    movieList:movieListReducer,
    movieById:movieByIdReducer,
    modal:modalReducer,
    register:userRegisterReducer,
    ratingReducer,
    addReview:addReviewReducer,
    screensList:viewScreensReducer,
    createScreen:addScreensReducer,
    deleteScreen:deleteScreensReducer,
    addMovie:addMovieReducer,
    deleteMovie:deleteMovieReducer,
    createOrder:createOrderReducer,
    findOrder:findOrderReducer,
    deleteOrder:deleteOrderReducer,
    updateOrder:updateOrderReducer
    
})


const userFormStorage=localStorage.getItem('user')?
JSON.parse(localStorage.getItem('user')):null

const initialState={
   userLogin:{user:userFormStorage}, 
}
const middleware=[thunk]

const store=createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


export default store