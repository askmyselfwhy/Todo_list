import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';
import './css/style.css';

import {createStore} from 'redux'
import {Provider} from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));
