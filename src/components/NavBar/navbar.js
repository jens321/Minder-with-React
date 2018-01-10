import React, { Component } from 'react'; 
import NavLink from './NavLink/navLink'; 

class NavBar extends Component {
    render () { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Minder</a> 
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav"> 
                        <NavLink navLink="/discovery" navName="Discovery" navIcon="oi oi-magnifying-glass" />
                        <NavLink navLink="/chat" navName="Chat" navIcon="oi oi-chat" />
                        <NavLink navLink="/profile" navName="Profile" navIcon="oi oi-person" />
                        <NavLink navLink="/connect" navName="Connect" navIcon="oi oi-puzzle-piece" />
                        <NavLink navLink="/logout" navName="Logout" navIcon="oi oi-account-logout" />
                    </ul>
                </div> 
            </nav> 
        );
    }
}

export default NavBar; 