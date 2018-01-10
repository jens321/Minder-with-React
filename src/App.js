import React, { Component } from 'react';
import TextField from './components/LoginPage/loginPage'; 

class App extends Component {
  render() {
    return (
      <TextField label="Name" placeholder="Please enter your name" />
    ); 
  }
}

export default App; 