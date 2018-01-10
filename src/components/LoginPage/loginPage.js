import React, { Component } from 'react'; 
import './loginPage.css'; 
import SignupForm from './SignupForm/signupForm'; 
import LoginForm from './LoginForm/loginForm'; 

class LoginPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="pseudo"></div> 
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <SignupForm />
                        <hr /> 
                        <LoginForm />
                    </div>
                </div> 
            </div> 
        );
    }
}

export default LoginPage; 