import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './../components/Navbar';
import { getPosts } from '../actions/request_actions';


class Postpage extends Component {
  static propTypes = {
    params: React.PropTypes.object,
    posts: React.PropTypes.array,
    getPosts: React.PropTypes.func,
    children: React.PropTypes.element,
  }

  componentWillMount() {
    this.props.getPosts();
  }


  render() {
    return (
      <div>
        <Navbar posts={this.props.posts} />
        {this.props.children}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { posts: state.data.posts };
}

export default connect(mapStateToProps, { getPosts })(Postpage);
