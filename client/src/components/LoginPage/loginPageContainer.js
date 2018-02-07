import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import LoginPage from './loginPage'; 

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

const LoginPageContainer = connect(
    mapStateToProps
)(LoginPage);

export default withRouter(LoginPageContainer); 