import React, { Component } from 'react';
import TextField from '../../textfield/textfield'; 

class LoginForm extends Component {
    render() {
        return (
            <form>
                <h2>Login</h2> 
                <TextField label="Name" placeholder="Please enter your name" />
                <TextField label="Email" placeholder="Please enter your email" /> 
            </form> 
        );
    }
}

export default LoginForm; 