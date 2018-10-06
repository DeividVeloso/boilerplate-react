import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducers from 'store/reducers';

export default (initialState = {}, history) => {
  const middlewares = [];

  const logger = createLogger({
    collapsed: true,
  });

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }
  middlewares.push(routerMiddleware(history));

  const store = createStore(
    connectRouter(history)(reducers),
    initialState,
    applyMiddleware(thunk, ...middlewares)
  );
  store.asyncReducers = {};

  return store;
};
