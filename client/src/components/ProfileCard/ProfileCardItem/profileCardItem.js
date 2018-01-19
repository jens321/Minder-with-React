import React, { Component } from 'react';

class ProfileCardItem extends Component {

    render() {
        let element; 
        if (!this.props.isEditable) {
            element = <p className="item">{this.props.data ? this.props.data : "You did not specify " + this.props.title.toLowerCase() + " yet."}</p> 
        } else {
            element = <input type="text" className="form-control" value={this.props.data} onChange={this.props.onDataChange}/>
        }
        return (
            <div>
                <b>{this.props.title}</b><hr />
                {element} 
            </div> 
        );
    }
}

export default ProfileCardItem; 