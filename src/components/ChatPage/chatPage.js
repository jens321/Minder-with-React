import React, { Component } from 'react'; 
import NavBar from '../NavBar/navbar';

class ChatPage extends Component {
    render() {
        return (
            <div>
                <NavBar page="chat"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2>Messages</h2><hr />
                        </div>
                    </div> 
                </div> 
            </div> 
        );
    }
}

export default ChatPage; 