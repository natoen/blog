import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import ReduxPromise from 'redux-promise';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';

const store = createStore(reducers, window.__PRELOADED_STATE__, applyMiddleware(ReduxPromise));
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => { window.scrollTo(0, 0); }} history={history} routes={routes} />
  </Provider>
  , document.querySelector('.reactcontainer')
);
