import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './theme/index.css';
import App from './App';
import registerServiceWorker from './services/registerServiceWorker';


const render = Component => {
  ReactDOM.render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}

render(App);

registerServiceWorker();
