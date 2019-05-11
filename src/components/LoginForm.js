import { emailTextChanged, passwordTextChanged } from './actions';
import { View } from 'native-base';

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}

class LoginForm extends Component {
    render() {
        return(
            <View>
                
            </View>
        );
    }
}

const styles = {

}


const mapStateToProps = state => {
    return {
      password: state.auth.password,
      email: state.auth.email,
    };
};
  

export default connect(mapStateToProps, {
    emailTextChanged,
    passwordTextChanged
    })(LoginForm);
