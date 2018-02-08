import React, { Component } from 'react';
import TextField from '../../textfield/textfield'; 
import Button from '../../Button/button';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "jens.tuyls@icloud.com",
            password: "test",
            error: ""
        }

        this.handleLoginError = this.handleLoginError.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this); 
    }

    handleLoginError(message) {
        this.setState({
            error: message
        });
    }

    handleLogin() {
        this.props.login({
            email: this.state.email,
            password: this.state.password 
        }); 
    }

    onEmailChange(newEmail) {
        this.setState({ 
            email: newEmail
         }); 
    }

    onPasswordChange(newPassword) {
        this.setState({
            password: newPassword
        }); 
    }

    render() {
        return (
            <form>
                <h2>Login</h2> 
                <TextField label="Email" text={this.state.email} type="email" placeholder="Please enter your email" onDataChange={ this.onEmailChange } />
                <TextField label="Password" text={this.state.password} type="password" placeholder="Please enter your password" onDataChange={ this.onPasswordChange } /> 
                <Button text="Login" handler={ this.handleLogin } /> 
                { this.state.error ? <div className="alert alert-danger">{this.state.error}</div> : false }
            </form> 
        );
    }
}

export default LoginForm; 