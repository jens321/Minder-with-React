import { connect } from 'react-redux'; 
import { login } from '../../../actions/actionTypes';
import LoginForm from './loginForm';

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => { dispatch(login(data)) }
    }
}

const LoginFormContainer = connect(
    null,
    mapDispatchToProps
)(LoginForm);

export default LoginFormContainer; 