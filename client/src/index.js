import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux'; 
import configureStore from './store/configureStore'; 
import AppContainer from './AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';


const store = configureStore(); 

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
