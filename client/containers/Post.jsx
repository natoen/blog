import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { getPost, resetPost } from '../actions/request_actions';


class Post extends Component {
  static propTypes = {
    params: React.PropTypes.object,
    getPost: React.PropTypes.func,
    resetPost: React.PropTypes.func,
    post: React.PropTypes.object,
  }

  componentWillMount() {
    this.props.getPost(this.props.params.post_url_path);
  }

  componentDidMount() {
    $('body').on('click touchstart', e => {
      if ($('.navbar-toggler').attr('aria-expanded') === 'true' &&
          !$(e.target).parents('nav').length) {
        $('.navbar-toggler span').click();
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.post_url_path !== nextProps.params.post_url_path) {
      this.props.resetPost();
      this.props.getPost(nextProps.params.post_url_path);
    }
  }

  componentDidUpdate() {
    $('body').find('code').gist();
  }

  componentWillUnmount() {
    this.props.resetPost();
  }

  render() {
    return (this.props.post ?
      <div className="post" key={this.props.post.post_number}>
        <ReactCSSTransitionGroup transitionName="page" transitionAppear="true">
          <h1>{this.props.post.title}</h1>
          <h6>{this.props.post.written}</h6>
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName="text" transitionAppear="true">
          <div className="body" dangerouslySetInnerHTML={{ __html: this.props.post.body }} />
        </ReactCSSTransitionGroup>
      </div>
      :
      <div className="post"></div>
    );
  }
}


function mapStateToProps(state) {
  return { post: state.data.post };
}

export default connect(mapStateToProps, { getPost, resetPost })(Post);
