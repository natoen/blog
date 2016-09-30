import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { getPosts } from './../actions/request_actions';
import imageLoader from './../actions/image_loader_action';
import PostsList from './../components/PostsList';


const images = [];

class Homepage extends Component {
  static propTypes = {
    getPosts: React.PropTypes.func,
    imageLoader: React.PropTypes.func,
    posts: React.PropTypes.array,
    imageLoaded: React.PropTypes.bool,
  }

  componentWillMount() {
    this.props.getPosts();
    images.homepage = (<img
      src="https://s3-ap-northeast-1.amazonaws.com/natoenblog/homepage.jpg"
      className="img-fluid m-x-auto d-block" key="homepage" alt="home background"
      onLoad={() => { this.props.imageLoader(true); }}
    />);
  }

  render() {
    return (this.props.imageLoaded ?
      <div className="homepage">
        <div className="table">
          <ReactCSSTransitionGroup
            transitionName="page" transitionAppear transitionAppearTimeout={1000}
            transitionEnterTimeout={1000} transitionLeaveTimeout={0}
          >
            {images.homepage}
          </ReactCSSTransitionGroup>
        </div>
        <PostsList posts={this.props.posts} />
      </div>
      :
      <div>Loading. . .
        <div style={{ opacity: 0 }}>{Object.keys(images).map(prop => images[prop])}</div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { posts: state.data.posts, imageLoaded: state.imageLoaded };
}

export default connect(mapStateToProps, { getPosts, imageLoader })(Homepage);
