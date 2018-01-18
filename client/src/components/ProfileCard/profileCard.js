import React, { Component } from 'react'; 
import ProfileCardItem from './ProfileCardItem/profileCardItem'; 
import ProfileCardHeader from './ProfileCardHeader/profileCardHeader'; 
import Button from '../Button/button'; 
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
                <ProfileCardHeader name={this.props.name} description={this.props.description} src={this.props.src} /> 
                <ul className="list-group list-group-flush">
                    <ProfileCardItem title="Email" value={this.props.email}/>
                    <ProfileCardItem title="Tags" value=""/>
                    <ProfileCardItem title="Education" value=""/>
                    <ProfileCardItem title="Location" value=""/>
                </ul> 
                <div className="card-body">
                    <Button text="Edit Profile"/>
                </div> 
            </div> 
        ); 
    }
}

export default ProfileCard; 