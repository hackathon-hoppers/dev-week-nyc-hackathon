import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import zip from './locationReducer';

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
  zip,
});

const store = createStore(rootReducer, middleware);

export default store;
