import { connectRouter, routerMiddleware } from 'connected-react-router';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddlware from 'redux-saga';

import rootReducers from '../+state/reducers';
import watcherSaga from './sagas';

const sagaMiddleware = createSagaMiddlware();
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getAppliedMiddleware = (routerhistory) => {
  if (process.env.NODE_ENV === 'development') {
    return applyMiddleware(
      sagaMiddleware,
      routerMiddleware(routerhistory),
      createLogger(),
    );
  }
  return applyMiddleware(
    sagaMiddleware,
    routerMiddleware(routerhistory),
  );
};

const configureStore = (routerHistory, preloadedState) => {
  const store = createStore(
    connectRouter(routerHistory)(rootReducers),
    preloadedState,
    composeEnhancers(
      getAppliedMiddleware(routerHistory),
    ),
  );
  sagaMiddleware.run(watcherSaga);
  return store;
};

export default configureStore;
