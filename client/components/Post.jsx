import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default function Post({ post, id }) {
  return (post ?
    <div className="post" key={id}>
      <ReactCSSTransitionGroup transitionName="page" transitionAppear="true">
        <h1>{post.title}</h1>
        <h6>{post.written}</h6>
      </ReactCSSTransitionGroup>
      <ReactCSSTransitionGroup transitionName="text" transitionAppear="true">
        <div className="body" dangerouslySetInnerHTML={{ __html: post.body }} />
      </ReactCSSTransitionGroup>
    </div>
    :
    <div>Loading. . . </div>
  );
}

Post.propTypes = {
  post: React.PropTypes.object,
  id: React.PropTypes.string,
};

