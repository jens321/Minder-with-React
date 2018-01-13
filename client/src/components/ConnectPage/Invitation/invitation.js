import React, { Component } from 'react'; 
import ProfileCardHeader from '../../ProfileCard/ProfileCardHeader/profileCardHeader';

class Invitation extends Component {
    render() {
        let buttonText = "Accept Invite"; 

        return (
            <div className="row">
                <div className="col-md-12">
                    <h2>Open Invitations</h2><hr />
                </div>
                <div className="col-md-4">
                    <ProfileCardHeader src="/images/profile.jpg" buttonText={buttonText} />
                </div>
                <div className="col-md-4">
                    <ProfileCardHeader src="/images/profile.jpg" buttonText={buttonText} />
                </div>
                <div className="col-md-4">
                    <ProfileCardHeader src="/images/profile.jpg" buttonText={buttonText} />
                </div>
            </div>
        ); 
    }
}

export default Invitation; 