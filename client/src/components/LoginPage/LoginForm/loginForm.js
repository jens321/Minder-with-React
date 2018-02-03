import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'; 
import TextField from '../../textfield/textfield'; 
import Button from '../../Button/button';
import axios from 'axios';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            redirectToProfile: false,
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
        axios.post('/api/login', {
            email: this.state.email,
            password: this.state.password 
        })
        .then((response) => {
            if (response.status === 200) {
                this.setState({
                    email: response.data.email,
                    password: response.data.password,
                    redirectToProfile: true
                });

                this.props.login(response.data); 
            } else {
                this.handleSignupError("Sorry, something went wrong during registration.");
            }
        })
        .catch(function(err) {
            console.log(err); 
        })
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
        if (!this.state.redirectToProfile) {
            return (
                <form>
                    <h2>Login</h2> 
                    <TextField label="Email" type="email" placeholder="Please enter your email" onDataChange={ this.onEmailChange } />
                    <TextField label="Password" type="password" placeholder="Please enter your password" onDataChange={ this.onPasswordChange } /> 
                    <Button text="Login" handler={ this.handleLogin } /> 
                    { this.state.error ? <div className="alert alert-danger">{this.state.error}</div> : false }
                </form> 
            );
        } else {
            return <Redirect to={{ pathname: '/profile'}} />;
        }
    }
}

export default LoginForm; 