
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Bubbles } from 'react-native-loader';
import { TextInput, ImageBackground, View, TouchableOpacity, Image } from 'react-native';
import { emailTextChanged, passwordTextChanged, loginUser } from './actions';

const LoginBackground = require('../Images/LoginBackground.jpg');
const ButtonBackground = require('../Images/Green-Gradient.png');
const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class LoginForm extends Component {
    
    onLoginButtonPress() {
        this.props.loginUser(this.props.email, this.props.password);
    }    
    
    onEmailTextChanged(text) {
        this.props.emailTextChanged(text);
    }
    
    onPasswordTextChanged(text) {
        this.props.passwordTextChanged(text);
    }
    
    render() {
        return (
            <ImageBackground source={LoginBackground} style={styles.BackgroundStyle}>
                <View style={styles.RootContainer}>
                    <View style={styles.HeaderContainer}>
                    </View>
                    <View style={styles.InputContainer}>

                        <View style={styles.InputStyling}>
                            <TextInput
                                style={{ flex: 1, fontSize: 18, paddingLeft: 10 }} 
                                label="Email"
                                placeholder="Email"
                                placeholderTextColor="#C0C0C0"
                                onChangeText={this.onEmailTextChanged.bind(this)}
                                value={this.props.email}
                                color='#C0C0C0'
                                />
                        </View>

                        <View style={styles.InputStyling}>
                            <TextInput
                                style={{ flex: 1, fontSize: 18, paddingLeft: 10 }} 
                                secureTextEntry
                                label="Password"
                                placeholder="Password"
                                placeholderTextColor="#C0C0C0"
                                onChangeText={this.onPasswordTextChanged.bind(this)}
                                value={this.props.password}
                                color="#C0C0C0"
                                />
                        </View>

                        <View style={styles.ButtonContainer}>
                            <TouchableOpacity 
                                onPress={this.onLoginButtonPress.bind(this)}   
                            >  
                                <Image
                                    style={styles.ButtonStyling}
                                    source={ButtonBackground} 
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Elements with absolute position, used as overlays */}
            
                { this.props.loading ? 
                    <View style={styles.LoadingContainer}>
                        <Bubbles   
                            size={10}
                            color="orange"
                        /> 
                    </View>
                : null }

                {/* End of overlayed elements */}
            </ImageBackground>
        );
    }
}

const styles = {
    BackgroundStyle: {
        flex: 1
    },
    RootContainer: {
        flexDirection: "column",
        flex: 1
    },
    HeaderContainer: {
        height: window.height*.4,
        width: "100%",
        backgroundColor: "maroon"
    },
    InputContainer: {
        height: window.height*.5,
        flexDirection: "column",
        alignItems: "space-between",
        justifyContent: "flex-start",
        marginLeft: window.width*.08,
        marginRight: window.width*.08,
        backgroundColor: "blue"
    },
    InputStyling: {
        marginTop: 10,
        height: 40,
        borderBottomWidth: 10,
        borderRadius: 3,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    },
    ButtonContainer: {
        marginTop: 10,
        height: 50,
        width: "100%",
        backgroundColor: "red",
    },
    ButtonStyling: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
        width: "100%",
        height: "100%"
    },
    LoadingContainer: {
        backgroundColor: "rgba(0, 0, 0, .8)",
        position: "absolute",
        top: window.height/2,
        left: window.width/2 - 50,
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center"
    },
}


const mapStateToProps = state => {
    return {
        password: state.auth.password,
        email: state.auth.email,
        loading: state.auth.loading,
        error: state.auth.error
    };
};


export default connect(mapStateToProps, {
    emailTextChanged,
    passwordTextChanged,
    loginUser
    })(LoginForm);