import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_RESET,
    ORDER_FIND_FAIL,
    ORDER_FIND_REQUEST,
    ORDER_FIND_SUCCESS,
    ORDER_DELETE_FAIL,
    ORDER_DELETE_REQUEST,
    ORDER_DELETE_SUCCESS,
    ORDER_DELETE_RESET,
    ORDER_UPDATE_FAIL,
    ORDER_UPDATE_REQUEST,
    ORDER_UPDATE_SUCCESS
} from '../constants/orderConstants'



export const createOrderReducer = (state = { order:{}}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return {
                loading: true
            }
        case ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                order: action.payload
            }
        case ORDER_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        case ORDER_CREATE_RESET:
            return {}
               
        default:
            return state;
    }
}


export const findOrderReducer = (state = { order:[]}, action) => {
    switch (action.type) {
        case ORDER_FIND_REQUEST:
            return {
                loading: true
            }
        case ORDER_FIND_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }
        case ORDER_FIND_FAIL:
            return {
                loading: false,
                error: action.payload
            }
               
        default:
            return state;
    }
}


export const deleteOrderReducer = (state={},action) => {
    switch (action.type) {
        case ORDER_DELETE_REQUEST:
            return {
                loading: true
            }
        case ORDER_DELETE_SUCCESS:
            return {
                loading: false,
                success: true
            }
        case ORDER_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case ORDER_DELETE_RESET:
            return {}
               
        default:
            return state;
    }
}


export const updateOrderReducer = (state={updatedOrder:{}},action) => {
    switch (action.type) {
        case ORDER_UPDATE_REQUEST:
            return {
                loading: true
            }
        case ORDER_UPDATE_SUCCESS:
            return {
                loading: false,
                success: true,
                updatedOrder:action.payload
            }
        case ORDER_UPDATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
               
        default:
            return state;
    }
}



