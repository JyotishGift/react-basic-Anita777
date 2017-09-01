import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

/*/const initialState = {
  counter: 0,
  prevCounters: []
}*/

const store = createStore(rootReducer/*, initialState*/);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

