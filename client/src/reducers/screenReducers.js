import {
    SCREEN_LIST_FAIL,
    SCREEN_LIST_REQUEST,
    SCREEN_LIST_SUCCESS,
    SCREEN_ADD_FAIL,
    SCREEN_ADD_REQUEST,
    SCREEN_ADD_SUCCESS,SCREEN_DELETE_FAIL,
    SCREEN_DELETE_REQUEST,
    SCREEN_DELETE_SUCCESS,
    SCREEN_ADD_RESET
} from '../constants/sreenConstants'



export const viewScreensReducer = (state = { screens:[] }, action) => {
    switch (action.type) {
        case SCREEN_LIST_REQUEST:
            return {
                loading: true
            }
        case SCREEN_LIST_SUCCESS:
            return {
                loading: false,
                screens: action.payload
            }
        case SCREEN_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}


export const addScreensReducer = (state = {}, action) => {
    switch (action.type) {
        case SCREEN_ADD_REQUEST:
            return {
                loading: true,
            }
        case SCREEN_ADD_SUCCESS:
            return {
                loading: false,
                success: true,
            }
        case SCREEN_ADD_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case SCREEN_ADD_RESET:
            return {}    
        default:
            return state;
    }
}

export const deleteScreensReducer = (state ={}, action) => {
    switch (action.type) {
        case SCREEN_DELETE_REQUEST:
            return {
                loading: true,
            }
        case SCREEN_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
            }
        case SCREEN_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}