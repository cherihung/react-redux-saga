export const POST_ACTIONS = {
  POSTS_GET_INIT: '[POSTS] Get Init',
  POSTS_GET_SUCCESS: '[POSTS] Get Success',
  POSTS_GET_ERROR: '[POSTS] Get Error',
};

export function createPostsInit() {
  return {
    type: POST_ACTIONS.POSTS_GET_INIT,
  };
}

export function createPostsSuccess(response) {
  return {
    type: POST_ACTIONS.POSTS_GET_SUCCESS,
    payload: response,
  };
}

export function createPostsError(response) {
  return {
    type: POST_ACTIONS.POSTS_GET_ERROR,
    payload: response,
  };
}
