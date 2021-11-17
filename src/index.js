import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// Provider ensures that our entire React application can potentially access data from the store. 
// Provider component from React Redux does 2 things:
// 1. It'll make the store available to nested components once they have been configured using connect() - a 2nd method provided by React Redux library
// 2. It alerts our Redux app when there has been a change in state, which will then re-render our React app
import { Provider } from 'react-redux';
import counterReducer from './reducers/counterReducer.js';
import App from './App';
import './index.css';

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Wrap the Provider component around the App component
// Instead of passing the store instance directly into the App component, pass it in to Provider as a prop, which will make it available to other components
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// Using the <Provider> component provided by the React Redux library, we gave our components the ability to be connected to the store
