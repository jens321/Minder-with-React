import React, { Component } from 'react'; 
import NavBar from '../NavBar/navbar';
import Invitation from './Invitation/invitation'; 
import PendingRequest from './PendingRequest/pendingRequest';  

class ConnectPage extends Component {
    render() {

        return (
            <div> 
                <NavBar page="connect"/>
                <div className="container">
                    <PendingRequest />
                    <Invitation /> 
                </div> 
            </div> 
        );
    }
}

export default ConnectPage; 