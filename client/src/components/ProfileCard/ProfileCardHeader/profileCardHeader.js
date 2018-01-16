import React, { Component } from 'react';
import Button from '../../Button/button'; 
import './profileCardHeader.css'; 

class ProfileCardHeader extends Component {
    render() {
        let url = this.props.src; 
        let buttonText = this.props.buttonText; 
        return (
            <div className="card-body">
                { url && <img src={url} alt="profile" /> }
                <h3 className="card-title">{this.props.title ? this.props.title : "No Name"}</h3>
                <p className="card-text">{this.props.description ? this.props.description : <span className="item">You did not specify a description yet.</span>}</p>
                { buttonText && <Button text={buttonText} />} 
            </div>
        );
    }
}

export default ProfileCardHeader; 