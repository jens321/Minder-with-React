import React, { Component } from 'react';
import TextField from '../../textfield/textfield'; 
import Button from '../../Button/button';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Jens Tuyls",
            email: "jens.tuyls@icloud.com",
            password: "test",
            error: ""
        }

        this.handleSignup = this.handleSignup.bind(this); 
        this.handleSignupError = this.handleSignupError.bind(this); 
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this); 
    }

    handleSignupError(message) {
        this.setState({ error: message }); 
    }

    handleSignup() {
        this.props.signup(
            { name: this.state.name, 
              email: this.state.email, 
              password: this.state.password
        });  
    }

    onNameChange(newName) {
        this.setState({
            name: newName
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
            <form id="signup-form">
                <h2>Signup</h2> 
                <TextField label="Name" text={this.state.name} placeholder="Please enter your name" type="text" onDataChange={this.onNameChange} />
                <TextField label="Email" text={this.state.email} placeholder="Please enter your email" type="email" onDataChange={this.onEmailChange}/> 
                <TextField label="Password" text={this.state.password} placeholder="Please enter your password" type="password" onDataChange={this.onPasswordChange}/> 
                <Button text="Submit" handler={this.handleSignup}/><br /><br />
                { this.state.error ? <div className="alert alert-danger">{this.state.error}</div> : false }
            </form> 
        );
    }
}

export default SignupForm; 