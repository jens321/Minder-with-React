import { connect } from 'react-redux';
import DiscoveryPage from './discoveryPage';

const mapStateToProps = state => {
    return {
        id: state._id
    }
}

const DiscoveryPageContainer = connect(
    mapStateToProps,
    null
)(DiscoveryPage); 

export default DiscoveryPageContainer; 