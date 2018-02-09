import { connect } from 'react-redux';
import LocationMap from './locationMap';

const mapStateToProps = state => {
    return {
        newLocation: state.location
    }
}

const LocationMapContainer = connect(
    mapStateToProps,
    null
)(LocationMap);

export default LocationMapContainer; 