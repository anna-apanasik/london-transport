import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import App from './app/App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, composeEnhancers(middleware));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
