import React, { Component } from 'react'; 
import NavBar from '../NavBar/navbar';
import ProfileCardContainer from '../ProfileCard/profileCardContainer'; 
import ProfileImageContainer from './ProfileImage/profileImageContainer';
import './profilePage.css'; 

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editable: false
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleSave = this.handleSave.bind(this); 
    }

    handleEdit() {
        this.setState({
            editable: true
        });
    }

    handleSave() {
        this.setState({
            editable: false
        });
    }

    handleImageClick(e) {
        e.preventDefault(); 
        if (this.state.editable) {

        }
    }

    render() {
        return (
            <div> 
                <NavBar page="profile"/>
                <div className="container">
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <ProfileImageContainer editable={this.state.editable} />
                            <ProfileCardContainer editable={this.state.editable} 
                                                  handleEdit={this.handleEdit} 
                                                  handleSave={this.handleSave} /> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        );
    }
}

export default ProfilePage; 