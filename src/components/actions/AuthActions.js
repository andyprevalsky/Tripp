import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_START,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    UBER_TOKEN_SET
} from './types';

export const emailTextChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
}

export const passwordTextChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const setUberAuthToken = (token) => {
    return {
        type: UBER_TOKEN_SET,
        payload: token
    }
}

export const loginUser = (email, password) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER_START });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => loginUserFailed(dispatch));
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};

const loginUserFailed = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAILED });
};