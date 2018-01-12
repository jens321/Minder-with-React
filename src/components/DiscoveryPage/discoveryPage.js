import React, { Component } from 'react'; 
import NavBar from '../NavBar/navbar';
import SearchBar from './SearchBar/searchBar'; 

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <NavBar page="discovery"/>
                <div className="container">
                    <SearchBar />
                </div>
            </div> 
        );
    }
}

export default ProfilePage; 