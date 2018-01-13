import React, { Component } from 'react'; 
import './messageBox.css'; 

class MessageBox extends Component {
    render() {
        return (
            <div className="col-md-8">
                <div className="message-area"></div>
                <input type="text" className="form-control" placeholder="Type your message" /> 
            </div>  
        ); 
    }
}

export default MessageBox; 