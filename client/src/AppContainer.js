import { connect } from 'react-redux';
import { login, logout } from './actions/actionTypes'; 
import App from './App';

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => { dispatch(login(user)) },
        logout: () => { dispatch(logout()) }
    }
};

const AppContainer = connect(
    null,
    mapDispatchToProps
)(App);

export default AppContainer; 











