import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../actions/request_actions';

class Postpage extends Component {
  componentWillMount() {
    this.props.getPost(this.props.params.id);
  }

  render() {
    if (!this.props.post) {
      return <div>Loading . . .</div>;
    }

    return (
      <div>
        <h3>{this.props.post.title}</h3>
        <p>{this.props.post.body}</p>
      </div>
    );
  }
}

Postpage.propTypes = {
  params: React.PropTypes.object,
  post: React.PropTypes.object,
  getPost: React.PropTypes.func,
};

function mapStateToProps(state) {
  return { post: state.data.post };
}

export default connect(mapStateToProps, { getPost })(Postpage);
