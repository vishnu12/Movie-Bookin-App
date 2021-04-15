import { DISABLE_MODAL, ENABLE_MODAL } from '../constants/modalConstants'

export const modalShiftReducer = (state = {disable:true}, action) => {
    switch (action.type) {
        case DISABLE_MODAL:
            return {
                disable: true,
            }

        case ENABLE_MODAL:
            return {
                disable: false
            }

        default:
            return state;
    }
}