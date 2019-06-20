import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import weather from './weatherReducer';

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const rootReducer = combineReducers({
  weather,
});

const store = createStore(rootReducer, middleware);

export default store;

export * from './weatherReducer';
