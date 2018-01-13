import React, { Component } from 'react';

class ProfileCardItem extends Component {
    render() {
        return (
            <li className="list-group-item">
                <b>{this.props.title}</b><hr />
                <p className="item">{this.props.value ? this.props.value : "You did not specify " + this.props.title.toLowerCase() + " yet."}</p> 
            </li>
        );
    }
}

export default ProfileCardItem; 