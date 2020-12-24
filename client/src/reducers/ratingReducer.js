

export const ratingReducer=(state={rating:0,hoverRating:0},action)=>{
    switch (action.type) {
        case 'MOUSE_ENTER':
            return {
                ...state,
                hoverRating:action.payload
            }
            case 'MOUSE_LEAVE':
            return {
                ...state,
                hoverRating:0
            }

            case 'SAVE_RATING':
            return {
                ...state,
                rating:action.payload
            }
         
        default:
            return state;
    }
 }