import React, { Component } from 'react'; 
import { Redirect } from 'react-router-dom'; 
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
        this.logout = this.logout.bind(this); 
    }

    logout() {
        
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
        if (this.state.loggedIn) {
            return (
                <div> 
                    <NavBar page="profile" logout={this.logout}/>
                    <div className="container">
                        <div className="row">
                            <div className="offset-md-2 col-md-8">
                                <ProfileImageContainer editable={this.state.editable} />
                                <ProfileCardContainer editable={this.state.editable} 
                                                      handleEdit={this.handleEdit} 
                                                      handleSave={this.handleSave}
                                                      logout={this.logout} /> 
                            </div> 
                        </div> 
                    </div> 
                </div> 
            );
        } else {
            return <Redirect to={{ pathname: '/'}} />; 
        }
    }
}

export default ProfilePage; 