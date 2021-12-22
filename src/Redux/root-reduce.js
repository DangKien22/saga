import { combineReducers } from 'redux';
import appReducer from './Reducer';

const rootReducer = combineReducers({
    app: appReducer,
});

export default rootReducer;