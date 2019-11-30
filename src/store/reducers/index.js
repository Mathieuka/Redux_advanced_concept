import counterReducer from '../reducers/counter';
import resultReducer from '../reducers/result';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

export default rootReducer;