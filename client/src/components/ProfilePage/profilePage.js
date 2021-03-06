import React, { Component } from 'react'; 
import NavBarContainer from '../NavBar/navbarContainer';
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
        console.log("rendering profile page ..."); 
        return (
            <div> 
                <NavBarContainer page="profile" logout={this.logout}/>
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
    }
}

export default ProfilePage; 