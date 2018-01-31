import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import LoginPage from './components/LoginPage/loginPage'; 
import DiscoveryPageContainer from './components/DiscoveryPage/discoveryPageContainer'; 
import ChatPage from './components/ChatPage/chatPage';
import ProfilePage from './components/ProfilePage/profilePage';
import ConnectPage from './components/ConnectPage/connectPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/discovery" component={DiscoveryPageContainer} />
        <Route exact path="/chat" component={ChatPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/connect" component={ConnectPage} />
        <Route exact path="/logout" component={LoginPage} />
      </Switch> 
    ); 
  }
}

export default App; 