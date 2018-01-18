import React, { Component } from 'react'; 
import NavBar from '../NavBar/navbar';
import ProfileCardContainer from '../ProfileCard/profileCardContainer'; 
import './profilePage.css'; 

class ProfilePage extends Component {

    render() {
        console.log(this.props.location.state); 
        return (
            <div> 
                <NavBar page="profile"/>
                <div className="container">
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <img src={'/images/profile.jpg'} alt="profile" />
                            <ProfileCardContainer /> 
                        </div> 
                    </div> 
                </div> 
            </div> 
        );
    }
}

export default ProfilePage; 