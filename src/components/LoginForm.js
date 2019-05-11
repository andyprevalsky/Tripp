import { View } from 'native-base';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { CardSection } from './common';
import { Bubbles } from 'react-native-loader';
import { TextInput, ImageBackground } from 'react-native';
import { emailTextChanged, passwordTextChanged, loginUser } from './actions';

const LoginBackground = require('../Images/LoginBackground.jpg');
const ButtonBackground = require('../Images/Green-Gradient.png');


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
                <View styles={styles.rootContainer}>
                    <View style={styles.InputContainer}>
                        <CardSection style={styles.InputStyling}>
                            <Icon 
                                name="email-outline" 
                                type="material-community"
                                size={20} 
                                color="#C0C0C0"
                                style={{ paddingLeft: 5 }} 
                                />
                            <TextInput
                                style={{ flex: 1, fontSize: 18, paddingLeft: 10 }} 
                                label="Email"
                                placeholder="Email"
                                placeholderTextColor="#C0C0C0"
                                onChangeText={this.onEmailTextChanged.bind(this)}
                                value={this.props.email}
                                color='#C0C0C0'
                                />
                        </CardSection>
                    </View>

                    <View style={styles.InputContainer}>
                        <CardSection style={styles.InputStyling}>
                            <Icon 
                                name="lock" 
                                type="feather"
                                size={20} 
                                color="#C0C0C0" 
                                style={{ paddingLeft: 5 }}
                                />
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
                        </CardSection>
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

                {/* Elements with absolute position, used as overlays */}

                { this.props.loading ? 
                    <View style={styles.LoadingContainer}>
                        <Bubbles   
                            size={30}
                            color={Color3}
                        /> 
                    </View>
                : null }
            </ImageBackground>
        );
    }
}

const styles = {
    InputContainer: {
        
    },
    InputStyling: {
        borderBottomWidth: 1,
        padding: 15,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, .0)',
        borderColor: 'grey',
    },
    BackgroundStyle: {
    },
    LoadingContainer: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, .7)"
    },
    rootContainer: {
        
    },
    ButtonContainer: {
        paddingTop: 10,
        paddingLeft: 1,
        paddingRight: 1,
        borderColor: 'white',
    },
    ButtonStyling: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'black',
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