import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Homepage from './components/Homepage';
// import PostsNew from './components/posts_new';
// import PostsShow from './components/posts_show';
//     <Route path="posts/new" component={PostsNew} />
//     <Route path="posts/:id" component={PostsShow} />

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Homepage} />

  </Route>
);
