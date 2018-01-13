import React, { Component } from 'react'; 

class TextField extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onDataChange(e.target.value); 
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.label.toLowerCase()}>{this.props.label}</label> 
                <input type={this.props.type} className="form-control" placeholder={this.props.placeholder} value={this.props.text} onChange={this.handleChange}/>
            </div> 
        );
    }
}

export default TextField; 