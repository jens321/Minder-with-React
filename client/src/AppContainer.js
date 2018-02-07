import { connect } from 'react-redux';
import { login, logout } from './actions/actionTypes'; 
import { withRouter } from 'react-router-dom'; 
import App from './App';


const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => { dispatch(login(user)) },
        logout: () => { dispatch(logout()) }
    }
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default withRouter(AppContainer); 











