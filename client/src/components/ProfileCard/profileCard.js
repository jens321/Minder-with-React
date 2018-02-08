import React, { Component } from 'react'; 
import ProfileCardItem from './ProfileCardItem/profileCardItem'; 
import ProfileCardHeader from './ProfileCardHeader/profileCardHeader'; 
import Button from '../Button/button'; 
import LocationMap from './LocationMap/locationMap'; 
import TagList from '../TagList/tagList'; 
import './profileCard.css';

class ProfileCard extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            name: this.props.name,
            description: this.props.description,
            src: "",
            email: this.props.email,
            tags: this.props.tags ? this.props.tags : [],
            currentTag: "",
            education: this.props.education,
            location: this.props.location  
        };
  
        this.handleSave = this.handleSave.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);  
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onTagsChange = this.onTagsChange.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
        this.handleTagKeyUp = this.handleTagKeyUp.bind(this); 
        this.handleTagDelete = this.handleTagDelete.bind(this); 
        this.onEducationChange = this.onEducationChange.bind(this);
        this.onLocationChange = this.onLocationChange.bind(this);
    }

    handleSave() {
        this.props.updateUser(this.state, this.props.id); 
        this.props.handleSave(); 
    }

    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    onDescriptionChange(e) {
        this.setState({
            description: e.target.value
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

    handleTagChange(e) {
        this.setState({
            currentTag: e.target.value
        }); 
    }

    handleTagKeyUp(e) {
        if (e.keyCode === 13) {
            this.setState({
                tags: this.state.tags.concat([this.state.currentTag.trim()]),
                currentTag: ""
            }); 
        }
    }

    handleTagDelete(e) {
        let value = e.currentTarget.textContent.slice(0,-1).trim(); 
        let index = this.state.tags.indexOf(value);   
        let tags = this.state.tags.slice(); 
        tags.splice(index, 1); 
        this.setState({
            tags: tags
        })
    }
    
    render() {
        return (
            <div className="card">
                <ProfileCardHeader name={this.state.name} description={this.state.description} src={this.state.src} isEditable={this.props.editable} onNameChange={this.onNameChange} onDescriptionChange={this.onDescriptionChange}/> 
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <ProfileCardItem title="Email" data={this.state.email} isEditable={this.props.editable} onDataChange={this.onEmailChange}/> 
                    </li>
                    <li className="list-group-item">
                        <TagList title="Tags" isEditable={this.props.editable} tags={this.state.tags} currentTag={this.state.currentTag} onTagChange={this.handleTagChange} onTagKeyUp={this.handleTagKeyUp} handleTagDelete={this.handleTagDelete}/>
                    </li>
                    <li className="list-group-item">
                        <ProfileCardItem title="Education" data={this.state.education} isEditable={this.props.editable} onDataChange={this.onEducationChange}/>
                    </li>
                    <li className="list-group-item">
                        <ProfileCardItem title="Location" data={this.state.location} isEditable={this.props.editable} onDataChange={this.onLocationChange}/>
                        <LocationMap />
                    </li> 
                </ul> 
                <div className="card-body">
                    { this.props.editable 
                        ? <Button text="Save Changes" handler={this.handleSave}/> 
                        : <Button text="Edit Profile" handler={this.props.handleEdit}/> }
                </div> 
            </div> 
        );
    }
}

export default ProfileCard; 