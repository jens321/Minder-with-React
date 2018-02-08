import React, { Component } from 'react';

class LocationMap extends Component {
    constructor(props) {
        super(props);

        this.initialize = this.initialize.bind(this);
    }

    initialize() {
        this.geocoder = new google.maps.Geocoder();
        let mapOptions = {
            zoom: 12,
            center: {lat: 37.7, lng: 122.4}
        };
        this.map = new google.maps.Map(this.mapElement, mapOptions); 
    }

    render() {
        return (
            <div id="map" ref={(input) => {this.mapElement = input}}></div>
        );
    }
}

export default LocationMap; 