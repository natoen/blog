import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './../components/Navbar';
import Post from './../components/Post';
import { getPost, getPosts } from '../actions/request_actions';


class Postpage extends Component {
  static propTypes = {
    params: React.PropTypes.object,
    post: React.PropTypes.object,
    posts: React.PropTypes.array,
    getPost: React.PropTypes.func,
    getPosts: React.PropTypes.func,
  }

  componentWillMount() {
    this.props.getPost(this.props.params.id);
    this.props.getPosts();
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
    if (this.props.params.id !== nextProps.params.id) {
      this.props.getPost(nextProps.params.id);
    }
  }

  componentDidUpdate() {
    $('body').find('code').gist();
  }

  render() {
    return (
      <div>
        <Navbar posts={this.props.posts} />
        <Post post={this.props.post} id={this.props.params.id} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { post: state.data.post, posts: state.data.posts };
}

export default connect(mapStateToProps, { getPost, getPosts })(Postpage);
