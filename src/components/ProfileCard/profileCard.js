import React, { Component } from 'react'; 
import ProfileCardItem from './ProfileCardItem/profileCardItem'; 
import ProfileCardHeader from './ProfileCardHeader/profileCardHeader'; 
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
                <ProfileCardHeader title={this.props.title} description={this.props.description} src={this.props.src} /> 
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