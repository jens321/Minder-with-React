import React, { Component } from 'react';
import Button from '../../Button/button'; 
import './profileCardHeader.css'; 

class ProfileCardHeader extends Component {
    render() {
        let url = this.props.src; 
        let buttonText = this.props.buttonText; 
        let bodyHeader;
        let bodyDescription;

        if (!this.props.isEditable) {
            bodyHeader = <h3 className="card-title">{this.props.name ? this.props.name : "No Name"}</h3>
            bodyDescription = <p className="card-text">{this.props.description ? this.props.description : <span className="item">You did not specify a description yet.</span>}</p>; 
        } else {
            bodyHeader = <input type="text" className="form-control" value={this.props.name} onChange={this.props.onNameChange}/>; 
            bodyDescription = <textarea type="text" className="form-control" value={this.props.description} onChange={this.props.onDescriptionChange}/>; 
        }

        return (
            <div className="card-body">
                { url && <img src={url} alt="profile" /> }
                { bodyHeader }
                { bodyDescription }
                { buttonText && <Button text={buttonText} />} 
            </div>
        );
    }
}

export default ProfileCardHeader; 