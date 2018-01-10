import React, { Component } from 'react'; 

class TextField extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.label.toLowerCase()}>{this.props.label}</label> 
                <input type={this.props.type} className="form-control" placeholder={this.props.placeholder} />
            </div> 
        );
    }
}

export default TextField; 