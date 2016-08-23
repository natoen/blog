import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getPosts } from './../actions/request_actions';


class Homepage extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  postsList() {
    return this.props.posts.length ?
      this.props.posts.map(post => (
        <li
          className="list-group-item"
          style={{ font: '2rem Oswald', border: 'none' }}
          key={post.post_number}
        >
          <Link to={`${post.post_number}`} style={{ color: '#000000' }}>
            {post.title}
          </Link>
        </li>
      ))
      :
      <div>Loading. . . </div>;
  }

  render() {
    return (
      <div className="container">
        <img
          src="https://s3-ap-northeast-1.amazonaws.com/natoenblog/nin%CC%83asanchez.jpg"
          className="img-fluid m-x-auto d-block"
          style={{ padding: '0.5rem 0', borderRadius: '3%' }}
          alt="home background"
        />
        <ul
          className="list-group"
          style={{ maxWidth: 600, margin: '0 auto' }}
        >
          {this.postsList()}
        </ul>
      </div>
    );
  }
}

Homepage.propTypes = {
  posts: React.PropTypes.array,
  getPosts: React.PropTypes.func,
};

function mapStateToProps(state) {
  return { posts: state.data.posts };
}

export default connect(mapStateToProps, { getPosts })(Homepage);
