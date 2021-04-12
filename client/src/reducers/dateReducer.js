import {SET_DATE} from '../constants/dateConstants'


export const dateReducer=(state={},action)=>{
    switch (action.type) {
        case SET_DATE:
            return {
                date:action.payload
            }
    
        default:
            return state;
    }
}