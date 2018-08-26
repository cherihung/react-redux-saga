import { all, takeLatest } from 'redux-saga/effects';

import { POST_ACTIONS as fromPostsActionTypes } from '../+state/actions/posts.actions';
import * as fromPosts from '../+state/effects/posts.effects';


function* watcherSaga() {
  yield all([
    takeLatest(fromPostsActionTypes.POSTS_GET_INIT, fromPosts.getPostsSaga),
  ]);
}

export default watcherSaga;
