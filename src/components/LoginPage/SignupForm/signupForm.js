import React, { Component } from 'react';
import TextField from '../../textfield/textfield'; 

class LoginForm extends Component {
    render() {
        return (
            <form id="signup-form">
                <h2>Signup</h2> 
                <TextField label="Name" placeholder="Please enter your name" type="text" />
                <TextField label="Email" placeholder="Please enter your email" type="email" /> 
                <TextField label="Password" placeholder="Please enter your password" type="password" /> 
            </form> 
        );
    }
}

export default LoginForm; 