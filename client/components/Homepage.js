import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

export default class Homepage extends Component {
  // componentWillMount() {
  //   this.props.fetchPosts();
  // }

  // renderPosts() {
  //   return this.props.posts.map(post => (
  //     <li className="list-group-item" key={post.id}>
  //       <Link to={"posts/" + post.id}>
  //         <span className="pull-xs-right">{post.categories}</span>
  //         <strong>post.title</strong>
  //       </Link>
  //     </li>
  //   ));
  // }

  render() {
    return (
      <div className="container">
        <img
          src="https://s3-ap-northeast-1.amazonaws.com/natoenblog/nin%CC%83asanchez.jpg"
          className="img-fluid m-x-auto d-block"
          style={{ padding: '0.5rem 0' }}
          alt="home background"
        />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return { posts: state.posts.all };
// }

// export default Homepage;
