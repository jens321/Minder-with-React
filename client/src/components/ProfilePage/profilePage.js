import React, { Component } from 'react'; 
import NavBar from '../NavBar/navbar';
import ProfileCard from '../ProfileCard/profileCard'; 
import './profilePage.css'; 

class ProfilePage extends Component {
    render() {
        return (
            <div> 
                <NavBar page="profile"/>
                <div className="container">
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <img src={'/images/profile.jpg'} alt="profile" />
                            <ProfileCard /> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        );
    }
}

export default ProfilePage; 