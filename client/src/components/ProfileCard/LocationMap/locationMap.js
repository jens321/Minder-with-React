import React, { Component } from 'react';
import './locationMap.css'; 

class LocationMap extends Component {
    constructor(props) {
        super(props);

        this.markers = []; 

        this.state = {
            currentLocation: this.props.location
        }

        this.initialize = this.initialize.bind(this);
        this.codeAddress = this.codeAddress.bind(this);
        this.setMapOnAll = this.setMapOnAll.bind(this);  
    }

    componentWillReceiveProps(newProps) {
        if (newProps.newLocation !== this.state.currentLocation) {
             this.setState({ currentLocation: newProps.newLocation }); 
             this.codeAddress();  
        } 
    }

    componentDidMount() {
        this.initialize(); 
    }

    initialize() {
        this.geocoder = new window.google.maps.Geocoder();
        let mapOptions = {
            zoom: 12,
            center: {lat: 37.7, lng: 122.4}
        };
        this.map = new window.google.maps.Map(this.mapElement, mapOptions); 
        this.codeAddress(function () {
            // do nothing
        });
    }

    codeAddress() {
        let address = this.props.location || "San Francisco, CA"; 
        this.geocoder.geocode({ 'address': address }, (results, status) => {
            if (status === 'OK') {
                this.locationName = results[0].formatted_address;
                this.coords = results[0].geometry.location;
                this.setMapOnAll(null);
                this.map.setCenter(this.coords); 
                let marker = new window.google.maps.Marker({
                    map: this.map,
                    position: this.coords
                });
                this.markers.push(marker); 
            } else {
                console.log("Geocode was not successful for the following reason: " + status);
            }
        });     
    }

    setMapOnAll(map) {
        for (let i = 0; i < this.markers.length; ++i) {
            this.markers[i].setMap(map); 
        }
    }

    render() {
        return (
            <div id="map" ref={(input) => {this.mapElement = input}}></div>
        );
    }
}

export default LocationMap; 