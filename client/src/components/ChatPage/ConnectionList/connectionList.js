import React, { Component } from 'react';

class ConnectionList extends Component {
    render() {
        return (
            <div className="col-md-4">
                <ul className="list-group">
                    <li className="list-group-item">Connection 1</li> 
                    <li className="list-group-item">Connection 2</li> 
                    <li className="list-group-item">Connection 3</li> 
                </ul>
            </div>
        );
    }
}

export default ConnectionList; 