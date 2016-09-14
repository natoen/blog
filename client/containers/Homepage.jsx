import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
        <ReactCSSTransitionGroup
          transitionName="page"
          transitionAppear="true"
        >
          <img
            src="https://s3-ap-northeast-1.amazonaws.com/natoenblog/homepagepic.jpg"
            className="img-fluid m-x-auto d-block"
            style={{ maxHeight: 700 }}
            alt="home background"
          />
        </ReactCSSTransitionGroup>
          {this.props.posts.length ?
            <ReactCSSTransitionGroup
              transitionName="text"
              transitionAppear="true"
            >
              <PostsList posts={this.props.posts} />
            </ReactCSSTransitionGroup>
          :
            <div>Loading. . . </div>}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { posts: state.data.posts };
}

export default connect(mapStateToProps, { getPosts })(Homepage);
