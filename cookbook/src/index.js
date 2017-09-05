import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

const store = createStore(rootReducer);
window.store = store;

const render = Component => {
  ReactDOM.render(
    <BrowserRouter> 
      <Provider store={store}>
        <Component />
      </Provider>
     </BrowserRouter>,
    document.getElementById('root')
  );
}

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}

render(App);
registerServiceWorker();
