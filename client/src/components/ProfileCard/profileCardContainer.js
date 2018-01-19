import { connect } from 'react-redux';
import { updateUser } from '../../actions/actionTypes';
import ProfileCard from './profileCard'; 

const mapStateToProps = state => {
    return {
        name: state.name,
        email: state.email,
        id: state._id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: (data) => { dispatch(updateUser(data)) }
    }
}

const ProfileCardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileCard);

export default ProfileCardContainer; 