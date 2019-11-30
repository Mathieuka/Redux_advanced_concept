import  uuid  from 'uuid';
import { STORE_RESULT, DELETE_RESULT } from '../actions/type';

const initialState = {
    results: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: uuid(), value: action.payload.result})
            }
        case DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.payload.resultElId);
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
};

export default reducer;