import React, { Component } from 'react';

class ProfileCardItem extends Component {

    render() {
        let element; 
        if (!this.props.isEditable) {
            element = <p className="item">{this.props.value ? this.props.value : "You did not specify " + this.props.title.toLowerCase() + " yet."}</p> 
        } else {
            element = <input type="text" className="form-control" value={this.props.data} onChange={this.props.onDataChange}/>
        }
        return (
            <li className="list-group-item">
                <b>{this.props.title}</b><hr />
                {element} 
            </li>
        );
    }
}

export default ProfileCardItem; 