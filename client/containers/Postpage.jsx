import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Navbar from './../components/Navbar';
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
    $('body').find($('code')).gist();
  }

  render() {
    if (!this.props.post || !this.props.posts) {
      return <div>Loading . . .</div>;
    }

    return (
      <div style={{ margin: '80px 0' }}>
        <Navbar posts={this.props.posts} />
        <ReactCSSTransitionGroup
          transitionName="page"
          transitionAppear="true"
        >
          <h3 style={{ font: '4rem Raleway' }}>{this.props.post.title}</h3>
          <h6
            style={{
              font: '1rem Raleway',
              color: 'silver',
              paddingBottom: '2rem',
            }}
          >
            {this.props.post.written}
          </h6>
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName="text"
          transitionAppear="true"
        >
          <div
            style={{ font: '1.25rem Archivo Narrow', textAlign: 'justify' }}
            dangerouslySetInnerHTML={{ __html: this.props.post.body }}
          />
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { post: state.data.post, posts: state.data.posts };
}

export default connect(mapStateToProps, { getPost, getPosts })(Postpage);
