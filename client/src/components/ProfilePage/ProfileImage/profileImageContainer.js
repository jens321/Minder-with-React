import { connect } from 'react-redux'; 
import { updateUser } from '../../../actions/actionTypes';
import ProfileImage from './profileImage'; 

const mapStateToProps = state => {
    return {
        id: state._id,
        imageUrlPath: state.imageUrlPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: (data, id) => dispatch(updateUser(data, id)) 
    }
}

const ProfileImageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileImage);

export default ProfileImageContainer; 