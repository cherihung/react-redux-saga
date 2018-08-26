import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'react-emotion';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as postsActions from '../+state/actions/posts.actions';

const Container = styled('div')({
  width: '70vw',
  margin: '0 auto',
});

const Post = styled('div')({
  padding: '1rem',
  marginBottom: '0.5em',
  h2: {
    textTransform: 'capitalize',
    margin: '0.5em 0 0',
  },
  p: {
    padding: '0',
    margin: '0',
    fontSize: '1.5em',
    lineHeight: '1.25em',
  },
  label: {
    backgroundColor: 'beige',
    padding: '0.1em',
  },
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
