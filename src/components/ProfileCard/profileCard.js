import React, { Component } from 'react'; 
import ProfileCardItem from './ProfileCardItem/profileCardItem'; 
import './profileCard.css';

class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false
        };
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{this.props.title ? this.props.title : "No Name"}</h3>
                    <p className="card-text">{this.props.description ? this.props.description : <p className="item">You did not specify a description yet.</p>}</p> 
                </div> 
                <ul className="list-group list-group-flush">
                    <ProfileCardItem title="Email" value=""/>
                    <ProfileCardItem title="Tags" value=""/>
                    <ProfileCardItem title="Education" value=""/>
                    <ProfileCardItem title="Location" value=""/>
                </ul> 
                <div className="card-body">
                    <button className="btn btn-primary">Edit Profile</button>
                </div> 
            </div> 
        ); 
    }
}

export default ProfileCard; 