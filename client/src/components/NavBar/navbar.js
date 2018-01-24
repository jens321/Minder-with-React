import React, { Component } from 'react'; 
import NavLink from './NavLink/navLink'; 

class NavBar extends Component {
    render () { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">Minder</a> 
                    <ul className="navbar-nav"> 
                        <NavLink active={this.props.page === "discovery"} 
                                 navLink="/discovery" 
                                 navName="Discovery" 
                                 navIcon="oi oi-magnifying-glass" />
                        <NavLink active={this.props.page === "chat"}
                                 navLink="/chat" 
                                 navName="Chat" 
                                 navIcon="oi oi-chat" />
                        <NavLink active={this.props.page === "profile"}
                                 navLink="/profile" 
                                 navName="Profile" 
                                 navIcon="oi oi-person" />
                        <NavLink active={this.props.page === "connect"}
                                 navLink="/connect" 
                                 navName="Connect" 
                                 navIcon="oi oi-puzzle-piece" />
                        <NavLink active={this.props.page === "logout"}
                                 navLink="/logout" 
                                 navName="Logout" 
                                 navIcon="oi oi-account-logout" />
                    </ul>
            </nav> 
        );
    }
}

export default NavBar; 