import React, { Component } from 'react'; 
import ProfileCardItem from './ProfileCardItem/profileCardItem'; 
import ProfileCardHeader from './ProfileCardHeader/profileCardHeader'; 
import Button from '../Button/button'; 
import './profileCard.css';

class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            name: "",
            description: "",
            src: "",
            email: "",
            tags: "",
            education: "",
            location: ""
        };
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this); 
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onTagsChange = this.onTagsChange.bind(this);
        this.onEducationChange = this.onEducationChange.bind(this);
        this.onLocationChange = this.onLocationChange.bind(this); 
    }

    handleEditClick() {
        this.setState({
            editable: true
        }); 
    }

    handleSaveClick() {
        this.setState({
            editable: false
        });
    }

    onEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    onTagsChange(e) {
        this.setState({
            tags: e.target.value
        });
    }

    onEducationChange(e) {
        this.setState({
            education: e.target.value
        });
    }

    onLocationChange(e) {
        this.setState({
            location: e.target.value
        }); 
    }
    
    render() {
        return (
            <div className="card">
                <ProfileCardHeader name={this.state.name} description={this.state.description} src={this.state.src} isEditable={this.state.editable}/> 
                <ul className="list-group list-group-flush">
                    <ProfileCardItem title="Email" data={this.state.email} isEditable={this.state.editable} onDataChange={this.onEmailChange}/>
                    <ProfileCardItem title="Tags" data={this.state.tags} isEditable={this.state.editable} onDataChange={this.onTagsChange}/>
                    <ProfileCardItem title="Education" data={this.state.education} isEditable={this.state.editable} onDataChange={this.onEducationChange}/>
                    <ProfileCardItem title="Location" data={this.state.location} isEditable={this.state.editable} onDataChange={this.onLocationChange}/>
                </ul> 
                <div className="card-body">
                    { this.state.editable 
                     ? <Button text="Save Changes" handler={this.handleSaveClick}/> 
                     : <Button text="Edit Profile" handler={this.handleEditClick}/> }
                </div> 
            </div> 
        ); 
    }
}

export default ProfileCard; 