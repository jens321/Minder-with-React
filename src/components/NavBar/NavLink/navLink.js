import React, { Component } from 'react'; 

class NavLink extends Component {
    render() {
        return (
            <li className="nav-item">
                <a className="nav-link" href={this.props.navLink}>{this.props.navName} <span className={this.props.navIcon}></span></a> 
            </li>
        ); 
    }
}

export default NavLink; 