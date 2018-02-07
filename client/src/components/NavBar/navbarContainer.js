import { connect } from 'react-redux'
import { logout } from '../../actions/actionTypes'
import NavBar from './navbar'

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

const NavBarContainer = connect(
    null,
    mapDispatchToProps
)(NavBar);

export default NavBarContainer; 