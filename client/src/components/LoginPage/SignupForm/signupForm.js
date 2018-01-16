import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TextField from '../../textfield/textfield'; 
import Button from '../../Button/button';
import axios from 'axios'; 

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            redirectToProfile: false
        }

        this.handleSignup = this.handleSignup.bind(this); 
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this); 
    }

    handleSignup() {
        let that = this; 
        axios.post('/api/signup', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
        .then(function(response) {
            console.log(response); 
            that.setState({
                name: response.data.name,
                email: response.data.email,
                redirectToProfile: true 
            }); 
        })
        .catch(function(error) {
            console.log(error); 
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
        if (!this.state.redirectToProfile) {
            return (
                <form id="signup-form">
                    <h2>Signup</h2> 
                    <TextField label="Name" text={this.state.name} placeholder="Please enter your name" type="text" onDataChange={this.onNameChange}/>
                    <TextField label="Email" text={this.state.email} placeholder="Please enter your email" type="email" onDataChange={this.onEmailChange}/> 
                    <TextField label="Password" text={this.state.password} placeholder="Please enter your password" type="password" onDataChange={this.onPasswordChange}/> 
                    <Button text="Submit" handler={this.handleSignup}/> 
                </form> 
            );
        } else {
            return <Redirect to={{ pathname: '/profile', state: this.state }} />; 
        }
    }
}

export default SignupForm; 