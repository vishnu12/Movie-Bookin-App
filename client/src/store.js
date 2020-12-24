
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
        addReviewReducer
       } from './reducers/movieReducers'

import {modalReducer} from './reducers/modelReducer'
import {ratingReducer} from './reducers/ratingReducer'


const reducer=combineReducers({
    userLogin:userLoginReducer,
    movieList:movieListReducer,
    movieById:movieByIdReducer,
    modal:modalReducer,
    register:userRegisterReducer,
    ratingReducer,
    addReview:addReviewReducer
    
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