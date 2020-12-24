

export const modalReducer=(state={modalOpen:false},action)=>{
   switch (action.type) {
       case 'MODAL_OPEN':
           return {
               modalOpen:true
           }
        case 'CLOSE_MODAL':
            return {
                modalOpen:false
            }   

        case'MODAL_SHIFT':
            return {
                modalOpen:!state.modalOpen
            }
   
       default:
           return state;
   }
}