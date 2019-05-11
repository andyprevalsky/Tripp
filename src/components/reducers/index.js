import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
// import all reducers

export default combineReducers({
    auth: AuthReducer,
});