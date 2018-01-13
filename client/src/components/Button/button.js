import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault(); 
        this.props.handler(); 
    }

    render() {
        return (
            <button className="btn btn-primary" onClick={this.handleClick}>{this.props.text}</button>
        );
    }
}

export default Button; 