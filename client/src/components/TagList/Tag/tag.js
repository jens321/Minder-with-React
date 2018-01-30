import React, { Component } from 'react';
import './tag.css'; 

class Tag extends Component {
    render() {
        return (
            <div className="tag" onClick={this.props.deleteTag}>
                {this.props.text} <span className="delete-tag">&nbsp;x</span> 
            </div>
        ); 
    }
}

export default Tag; 