import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 

class NavLink extends Component {
    render() {
        return (
            <li className={"nav-item" + (this.props.active ? " active" : "")}>
                <Link className="nav-link" to={this.props.navLink}>{this.props.navName} <span className={this.props.navIcon}></span></Link> 
            </li>
        ); 
    }
}

export default NavLink; 