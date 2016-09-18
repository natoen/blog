import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { getPosts } from './../actions/request_actions';
import imageLoader from './../actions/image_loader_action';
import PostsList from './../components/PostsList';


const images = [];

class Homepage extends Component {
  static propTypes = {
    posts: React.PropTypes.array,
    getPosts: React.PropTypes.func,
    imageLoaded: React.PropTypes.boolean,
    imageLoader: React.PropTypes.func,
  }

  componentWillMount() {
    this.props.getPosts();
    images.homepage = (<img
      src="https://s3-ap-northeast-1.amazonaws.com/natoenblog/homepage.jpg"
      className="img-fluid m-x-auto d-block" alt="home background"
      onLoad={() => { this.props.imageLoader(true); }}
    />);
  }

  render() {
    return (this.props.imageLoaded ?
      <div className="homepage">
        <ReactCSSTransitionGroup transitionName="page" transitionAppear="true">
          {images.homepage}
        </ReactCSSTransitionGroup>
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
