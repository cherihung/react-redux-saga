import produce from 'immer';

import { POST_ACTIONS as ActionTypes } from '../actions/posts.actions';

const initialState = {
  error: undefined,
  items: null,
  loading: false,
};

const postsReducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case ActionTypes.POSTS_GET_INIT:
      draft.loading = true;
      break;
    case ActionTypes.POSTS_GET_SUCCESS:
      draft.loading = false;
      draft.error = false;
      draft.items = action.payload;
      break;
    case ActionTypes.POSTS_GET_ERROR:
      draft.loading = false;
      draft.error = true;
      break;
    default:
      return state;
  }
});

export default postsReducer;
