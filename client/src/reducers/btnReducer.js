import { DISABLE_BTN, ENABLE_BTN } from '../constants/btnConstants'

export const btnDisableReducer = (state = {}, action) => {
    switch (action.type) {
        case DISABLE_BTN:
            return {
                disable: true,
                value:action.payload
            }

        case ENABLE_BTN:
            return {
                disable: false
            }

        default:
            return state;
    }
}