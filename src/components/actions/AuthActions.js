//import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
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