import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './../client/reducers';
import routes from './../client/routes';
import controllers from './controllers';
import template from './template';


const serve = (req, res) => {
  match({ routes, location: req.baseUrl }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const store = createStore(reducers, applyMiddleware(ReduxPromise));
      const html = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );
      res.status(200).send(template(html, store.getState(), process.env.NODE_ENV));
    } else {
      res.redirect(302, '/');
    }
  });
};

module.exports = (app, express) => {
  const router = express.Router();

  router.get('/posts', controllers.posts.get);
  router.route('/post/:post_url_path')
    .get(controllers.post.get);
    // .post(controllers.posts.post)
    // .put(controllers.posts.put)
    // .delete(controllers.post.delete);

  app.use('/api', router);
  app.use('/*', serve);
};
