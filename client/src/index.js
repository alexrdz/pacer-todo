import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Goal from './containers/GoalContainer';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <Route exact path="/" component={AppContainer} />
        <Route path="/:goal" component={Goal} />
      </div>
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root'));
registerServiceWorker();
