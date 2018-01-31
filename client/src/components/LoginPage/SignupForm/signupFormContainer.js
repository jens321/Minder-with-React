import { connect } from 'react-redux';
import { signup } from '../../../actions/actionTypes';
import SignupForm from './signupForm'; 

const mapDispatchToProps = dispatch => {
    return {
        signup: (data) => { dispatch(signup(data)) }
    }
}

const SignupFormContainer = connect(
    null, 
    mapDispatchToProps
)(SignupForm); 

export default SignupFormContainer; 