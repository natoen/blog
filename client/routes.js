import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Homepage from './containers/Homepage';
import Postpage from './containers/Postpage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    <Route path=":id" component={Postpage} />
  </Route>
);
