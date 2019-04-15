import React from 'react';
import ReactDOM from 'react-dom';
// component from react-redux
import { Provider} from 'react-redux';
// function from redux
import {createStore} from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <App />
    </ Provider>,
     document.querySelector('#root')
);
