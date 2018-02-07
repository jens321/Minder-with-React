import React, { Component } from 'react'; 
import { Redirect} from 'react-router'; 
import './loginPage.css'; 
import SignupFormContainer from './SignupForm/signupFormContainer'; 
import LoginFormContainer from './LoginForm/loginFormContainer'; 

class LoginPage extends Component {
    render() {
        if (!this.props.loggedIn) {
            return (
                <div className="container-fluid" id="login-page">
                    <div className="pseudo"></div> 
                    <div className="row">
                        <div className="offset-md-3 col-md-6">
                            <SignupFormContainer />
                            <hr /> 
                            <LoginFormContainer />
                        </div>
                    </div> 
                </div> 
            );
        } else {
            console.log('redirecting to profile page ...'); 
            return <Redirect to="/profile" />; 
        }
    }
}

export default LoginPage; 