import { INCREMENT, DECREMENT, ADD, SUBTRACT } from '../actions/type';

const initialState = {
    counter: 0
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case INCREMENT:
            const newState = {...state};
            newState.counter = state.counter + 1;
            return newState;
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case ADD:
            return {
                ...state,
                counter: state.counter + action.payload.val
            }
        case SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload.val
            }
    }
    return state;
};

export default reducer;