import React, { Component } from 'react'; 
import './loginPage.css'; 
import SignupFormContainer from './SignupForm/signupFormContainer'; 
import LoginForm from './LoginForm/loginForm'; 

class LoginPage extends Component {
    render() {
        return (
            <div className="container-fluid" id="login-page">
                <div className="pseudo"></div> 
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <SignupFormContainer />
                        <hr /> 
                        <LoginForm />
                    </div>
                </div> 
            </div> 
        );
    }
}

export default LoginPage; 