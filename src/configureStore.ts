/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
// import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import { createInjectorsEnhancer } from 'redux-injectors';
import rootSaga from './rootSaga';

export default function configureStore(initialState = {}) {
  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};

  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    /* eslint-disable no-underscore-dangle */
    // @ts-ignore
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      // @ts-ignore
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }

    // NOTE: Uncomment the code below to restore support for Redux Saga
    // Dev Tools once it supports redux-saga version 1.x.x
    // if (window.__SAGA_MONITOR_EXTENSION__)
    //   reduxSagaMonitorOptions = {
    //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
    //   };
    /* eslint-enable */
  }


  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  const runSaga = sagaMiddleware.run;
  const injectEnhancer = createInjectorsEnhancer({
    createReducer,
    runSaga
  });

  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers, injectEnhancer));

  // Extensions
  // @ts-ignore
  store.runSaga = sagaMiddleware.run(rootSaga);
  // @ts-ignore
  store.injectedReducers = {}; // Reducer registry
  // @ts-ignore
  store.injectedSagas = {}; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    module.hot.accept('./reducers', () => {
      // @ts-ignore
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }
  return { store };
}
