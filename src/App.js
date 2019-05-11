import React, { Component } from 'react';
import Router from './Router';
import firebase from 'firebase';
import reducers from './components/reducers';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

class App extends Component {
    componentWillMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyBM8tnV0GqmroIWl0vJKV3SruW9drUcCSI",
            authDomain: "tripp-78914.firebaseapp.com",
            databaseURL: "https://tripp-78914.firebaseio.com",
            projectId: "tripp-78914",
            storageBucket: "tripp-78914.appspot.com",
            messagingSenderId: "750642773544",
            appId: "1:750642773544:web:76450e61dc44dd48"
        };
        firebase.initializeApp(firebaseConfig);
    }
    
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
};

export default App;
