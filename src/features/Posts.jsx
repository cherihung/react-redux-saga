import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'react-emotion';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as postsActions from '../+state/actions/posts.actions';
import Post from './Post';

const Container = styled('div')({
  width: '70vw',
  margin: '0 auto',
});

class Posts extends Component {
  constructor(props) {
    super(props);
    const { onLoad } = this.props;
    onLoad();
  }

  renderRow = items => items.map(item => (
    <Post key={item.id}>
      <span>
        Post Id:
        {item.id}
      </span>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </Post>
  ))

  render() {
    const { items, error, loading } = this.props;

    if (error) { return <div>Error...</div>; }
    if (loading) { return <div>Loading...</div>; }

    if (items) {
      return (
        <Container>
          { this.renderRow(items) }
        </Container>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  items: state.posts.items,
  error: state.posts.error,
  loading: state.posts.loading,
});

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(postsActions.createPostsInit()),
});

Posts.defaultProps = {
  error: undefined,
  loading: false,
  items: null,
};

Posts.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.bool,
  loading: PropTypes.bool,
  onLoad: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));
