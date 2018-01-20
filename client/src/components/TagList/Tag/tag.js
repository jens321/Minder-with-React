import React, { Component } from 'react';
import './tag.css'; 

class Tag extends Component {
    render() {
        return (
            <div className="tag">
                {this.props.text} 
            </div>
        ); 
    }
}

export default Tag; 