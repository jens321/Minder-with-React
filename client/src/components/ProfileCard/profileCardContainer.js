import { connect } from 'react-redux';
import ProfileCard from './profileCard'; 

const mapStateToProps = state => {
    return {
        name: state.name,
        email: state.email
    }
}

const ProfileCardContainer = connect(
    mapStateToProps
)(ProfileCard);

export default ProfileCardContainer; 