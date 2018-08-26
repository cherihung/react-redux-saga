import { combineReducers } from 'redux';

import postsReducer from './posts.reducer';

const allReducers = {
  posts: postsReducer,
};

const rootReducer = combineReducers({ ...allReducers });

export default rootReducer;
