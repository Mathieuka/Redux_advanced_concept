import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './store/reducers/index';


//custom middleware
const logger =  store => {
    return next => {
        return action => {
             console.log('[index.js Middleware] Dispatching ', action);
             const result = next(action);
             console.log('[index.js  ¨Middleware] next state', store.getState());
             return result;
        }
    }
}

const store = createStore(reducers, applyMiddleware(logger));



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
