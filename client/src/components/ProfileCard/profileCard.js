import React, { Component } from 'react'; 
import ProfileCardItem from './ProfileCardItem/profileCardItem'; 
import ProfileCardHeader from './ProfileCardHeader/profileCardHeader'; 
import Button from '../Button/button'; 
import TagList from '../TagList/tagList'; 
import axios from 'axios'; 
import './profileCard.css';

class ProfileCard extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            name: "",
            description: "",
            src: "",
            email: "",
            tags: this.props.tags ? this.props.tags : [],
            currentTag: "",
            education: "",
            location: ""
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

    componentWillReceiveProps(newProps) {
        // initiliaze data coming from redux store
        this.setState({
            name: newProps.name,
            email: newProps.email
        });
    }

    handleSave() {
        let that = this; 
        axios.patch(`/api/user/${this.props.id}`, this.state)
            .then(function(response) {
                if (response.status === 200) {
                    that.setState({
                        name: response.data.name,
                        description: response.data.description,
                        email: response.data.email,
                        tags: response.data.tags,
                        education: response.data.education,
                        location: response.data.location
                    });

                    // update redux store
                    that.props.updateUser(response.data); 
                }
            })
            .catch(function(error) {
                console.log(error); 
            });
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