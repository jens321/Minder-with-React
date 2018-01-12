import React, { Component } from 'react'; 

class SearchBar extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <input type="text" placeholder="Search for people" className="form-control" />
                </div>
            </div> 
        );
    }
}

export default SearchBar; 