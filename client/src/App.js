import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import LoginPageContainer from './components/LoginPage/loginPageContainer'; 
import DiscoveryPageContainer from './components/DiscoveryPage/discoveryPageContainer'; 
import ChatPage from './components/ChatPage/chatPage';
import ProfilePage from './components/ProfilePage/profilePage';
import ConnectPage from './components/ConnectPage/connectPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({ loggedIn: newProps.loggedIn }); 
  }

  render() {
    if (this.state.loggedIn) {
      return (
        <Switch>
          <Route exact path="/" component={LoginPageContainer} />
          <Route exact path="/discovery" component={DiscoveryPageContainer} />
          <Route exact path="/chat" component={ChatPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/connect" component={ConnectPage} />
          <Route exact path="/logout" component={LoginPageContainer} />
        </Switch> 
      );
    } else {
      return (
        <Switch>
          <Route path="/" component={LoginPageContainer} />
        </Switch>
      );
    }
  }
}

export default App; 