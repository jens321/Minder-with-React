import React, { Component } from 'react';

class ProfileCardHeader extends Component {
    render() {
        let url = this.props.src; 
        return (
            <div className="card-body">
                { url && <img src={url} alt="profile" /> }
                <h3 className="card-title">{this.props.title ? this.props.title : "No Name"}</h3>
                <p className="card-text">{this.props.description ? this.props.description : <p className="item">You did not specify a description yet.</p>}</p> 
            </div>
        );
    }
}

export default ProfileCardHeader; 