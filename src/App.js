import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import LoginPage from './components/LoginPage/loginPage'; 
import ProfilePage from './components/ProfilePage/profilePage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/" component={LoginPage} />
      </Switch> 
    ); 
  }
}

export default App; 