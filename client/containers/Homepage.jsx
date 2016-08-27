import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from './../actions/request_actions';
import PostsList from './../components/PostsList';


class Homepage extends Component {
  static propTypes = {
    posts: React.PropTypes.array,
    getPosts: React.PropTypes.func,
  }

  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div className="homepage">
        <img
          src="https://s3-ap-northeast-1.amazonaws.com/natoenblog/nin%CC%83asanchez.jpg"
          className="img-fluid m-x-auto d-block"
          style={{ borderRadius: '3%' }}
          alt="home background"
        />
        {this.props.posts.length ?
          <PostsList posts={this.props.posts} /> : <div>Loading. . . </div>}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { posts: state.data.posts };
}

export default connect(mapStateToProps, { getPosts })(Homepage);
