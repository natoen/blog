import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Homepage from './containers/Homepage';
import Postpage from './containers/Postpage';
import Post from './containers/Post';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />
    <Route path="posts/" component={Postpage}>
      <Route path=":post_url_path" component={Post} />
    </Route>
  </Route>
);
