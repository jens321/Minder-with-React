import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import './navbar.css'; 

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout(); 
    }

    render () { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">Minder</a> 
                <ul className="navbar-nav">
                    <li className={"nav-item" + (this.props.page === "discovery" ? " active" : "")}>
                        <Link className="nav-link" to="/discovery">Discovery <span className="oi oi-magnifying-glass"></span></Link> 
                    </li> 
                    <li className={"nav-item" + (this.props.page === "chat" ? " active" : "")}>
                        <Link className="nav-link" to="/chat">Chat <span className="oi oi-chat"></span></Link> 
                    </li>
                    <li className={"nav-item" + (this.props.page === "profile" ? " active" : "")}>
                        <Link className="nav-link" to="/profile">Profile <span className="oi oi-person"></span></Link> 
                    </li>
                    <li className={"nav-item" + (this.props.page === "connect" ? " active" : "")}>
                        <Link className="nav-link" to="/connect">Connect <span className="oi oi-puzzle-piece"></span></Link> 
                    </li>
                    <li className={"nav-item" + (this.props.page === "logout" ? " active" : "")}>
                        <Link className="nav-link" to="/logout" onClick={this.handleLogout}>Logout <span className="oi oi-account-logout"></span></Link> 
                    </li>
                </ul>
            </nav> 
        );
    }
}

export default NavBar; 