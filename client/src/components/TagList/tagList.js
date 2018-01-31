import React, { Component } from 'react';
import Tag from './Tag/tag'; 

class TagList extends Component {
    render() {
        return (
            <div className="tag-wrap">
                <b>{this.props.title}</b><hr />
                <div className="tag-list">
                    {this.props.tags.length !== 0 ? this.props.tags.map((tag, index) => <Tag key={index} text={tag} deleteTag={this.props.handleTagDelete} isEditable={this.props.isEditable}/>) : <p className="item">You did not specify any tags yet.</p>}
                </div> 
                {this.props.isEditable ? <input type="text" className="form-control" onKeyUp={this.props.onTagKeyUp} onChange={this.props.onTagChange} value={this.props.currentTag}/> : false}
            </div>
        );
    }
}

export default TagList; 