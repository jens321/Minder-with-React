import React, { Component } from 'react';
import './tag.css'; 

class Tag extends Component {
    render() {
        let delCross = this.props.isEditable ? <span className="delete-tag">&nbsp;x</span> : ""; 

        return (
            <div className="tag" onClick={this.props.deleteTag}>
                {this.props.text}
                {delCross}
            </div>
        ); 
    }
}

export default Tag; 