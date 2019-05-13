import React, { Component } from 'react';
import { View, Linking } from 'react-native';
import { connect } from 'react-redux';
import { setUberAuthToken } from './actions';
import querystring from 'querystring';
import firebase from 'firebase';

const REDIRECT_URI = 'tripp://callback';
const U_CLIENT_ID = "TXi5iR_jMl5ehjkgxdj-VRjVSAonqfM_";
const extension = querystring.stringify({
    response_type: 'code',
    scope: 'history_lite',
    client_id: U_CLIENT_ID,
    redirect_uri = REDIRECT_URI,
})
const url = `https://login.uber.com/oauth/v2/authorize/?${extension}`;

class UberAuthentication extends Component {
    componentWillMount() {
        const id = 'LqqarxhRAPhVF9CQcnSRtGzhSKS2';//firebase.auth().currentUser.uid;
        firebase.database().ref(`/users/${id}/accountInfo/tokens`).once('value')
        .then((snapshot) => this.authenticate(snapshot))
        .catch(() => { // create tokens if otherwise no config
          firebase.database().ref(`/users/${id}/accountInfo/tokens`).push('');
          firebase.database().ref(`/users/${id}/accountInfo/tokens`).once('value')
          .then((snapshot) => this.authenticate(snapshot));
        });
    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL.bind(this));
    }

    authenticate(snapshot) {
        if (snapshot.val().UberToken === undefined) { // get new token from Uber
            Linking.addEventListener('url', this.handleOpenURL.bind(this));
            Linking.openURL(url).catch(err => console.error('an error as occured', err));
        } else {
            this.props.setUberAuthToken(snapshot.val().UberToken);
        }
    }

    handleOpenURL(event) {
        const id = firebase.auth().currentUser.uid;
        if (event.url.includes('error')) {
            console.error('Denied Spotify Authentication');
            Linking.openURL(url).catch(err => console.error('an error as occured', err));
            return;
        } 
        const uberToken = event.url.split('code=').pop();
        firebase.database().ref(`/users/${id}/accountInfo/tokens`)
        .set({ UberToken: uberToken });
        this.props.setUberAuthToken(uberToken);
    }

    render() {
        return (
            <View>
                <Text> 
                    Uber Authentication in Progress
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        uberAuthToken: state.auth.uberAuthToken
    };
};


export default connect(mapStateToProps, { 
    setUberAuthToken
    })(UberAuthentication);