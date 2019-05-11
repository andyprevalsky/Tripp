import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED
    } from '../actions/types';

const INITIAL_STATE = { 
    email: '', 
    password: '',
    loading: false,
    user: null,
    error: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_START:
            return { ...state, loading: true, error: false };
        case LOGIN_USER_SUCCESS:
            return { ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAILED:
            return { ...INITIAL_STATE, loading: false, error: true };
        default:
            return state;
    }
};