// could be directly written in index.js as well
import { createStore } from 'redux'; 
import rootReducer from '../reducers/rootReducer'; 

export default function configureStore() {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}