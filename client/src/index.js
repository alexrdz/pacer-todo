import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root'));
registerServiceWorker();