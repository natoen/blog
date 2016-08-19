import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';
import routes from './routes';
import reducers from './reducers';

const createStoreWithMiddleware = createStore(reducers, applyMiddleware(ReduxPromise));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.react')
);
