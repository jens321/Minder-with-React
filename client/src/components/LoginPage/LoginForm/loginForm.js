import React, { Component } from 'react';
import TextField from '../../textfield/textfield'; 
import Button from '../../Button/button';

class LoginForm extends Component {
    render() {
        return (
            <form>
                <h2>Login</h2> 
                <TextField label="Name" placeholder="Please enter your name" />
                <TextField label="Email" placeholder="Please enter your email" /> 
                <Button text="Login" /> 
            </form> 
        );
    }
}

export default LoginForm; 