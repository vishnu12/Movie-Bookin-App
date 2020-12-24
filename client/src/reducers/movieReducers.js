
import {
    MOVIE_LIST_FAIL,
    MOVIE_LIST_REQUEST,
    MOVIE_LIST_SUCCESS,
    MOVIE_BY_ID_FAIL,
    MOVIE_BY_ID_REQUEST,
    MOVIE_BY_ID_SUCCESS,
    ADD_REVIEW_FAIL,
    ADD_REVIEW_REQUEST,
    ADD_REVIEW_SUCCESS
}
    from '../constants/movieConstants'


export const movieListReducer = (state = { movies: [] }, action) => {

    switch (action.type) {
        case MOVIE_LIST_REQUEST:
            return {
                loading: true,
            }

        case MOVIE_LIST_SUCCESS:
            return {
                loading: false,
                movies:action.payload
            }

        case MOVIE_LIST_FAIL:
            return {
                loading: false,
                error:action.payload
            }
        default:
            return state;
    }
}

export const movieByIdReducer = (state = { movie: {} }, action) => {

    switch (action.type) {
        case MOVIE_BY_ID_REQUEST:
            return {
                loading: true,
            }

        case MOVIE_BY_ID_SUCCESS:
            return {
                loading: false,
                movie:action.payload
            }

        case MOVIE_BY_ID_FAIL:
            return {
                loading: false,
                error:action.payload
            }
        default:
            return state;
    }
}


export const addReviewReducer=(state={},action)=>{
      
    switch (action.type) {
        case ADD_REVIEW_REQUEST:
            return {
                loading: true,
            }

        case ADD_REVIEW_SUCCESS:
            return {
                loading: false,
                success:true
            }

        case ADD_REVIEW_FAIL:
            return {
                loading: false,
                error:action.payload
            }
        default:
            return state;
    }
}