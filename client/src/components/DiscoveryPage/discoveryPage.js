import React, { Component } from 'react'; 
import NavBar from '../NavBar/navbar';
import SearchBar from './SearchBar/searchBar'; 
import ProfileCardHeader from '../ProfileCard/ProfileCardHeader/profileCardHeader'; 
import axios from 'axios'; 

class DiscoveryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {}; 
    }

    componentDidMount() {
        axios.get(`/api/similar/${this.props.id}`)
            .then(function(response) {
                console.log(response); 
            })
            .catch(function(error) {
                console.log(error); 
            });
    }

    render() {
        return (
            <div>
                <NavBar page="discovery"/>
                <div className="container">
                    <SearchBar />
                    <h2>Similar Interests</h2><hr />
                    <div className="row">
                        <div className="col-md-4">
                            <ProfileCardHeader src="/images/profile.jpg" buttonText="Connect" />
                        </div>
                        <div className="col-md-4">
                            <ProfileCardHeader src="/images/profile.jpg" buttonText="Connect" />
                        </div>
                        <div className="col-md-4">
                            <ProfileCardHeader src="/images/profile.jpg" buttonText="Connect" />
                        </div> 
                    </div> 
                    <h2>Near You</h2><hr />
                    <div className="row">
                        <div className="col-md-4">
                            <ProfileCardHeader src="/images/profile.jpg" buttonText="Connect" />
                        </div>
                        <div className="col-md-4">
                            <ProfileCardHeader src="/images/profile.jpg" buttonText="Connect" />
                        </div>
                        <div className="col-md-4">
                            <ProfileCardHeader src="/images/profile.jpg" buttonText="Connect" />
                        </div> 
                    </div> 
                </div>
            </div> 
        );
    }
}

export default DiscoveryPage; 