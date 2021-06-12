import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import userReducer from './user/user.reducer';

export default createStore(
  combineReducers({
    user: userReducer
  }),
  applyMiddleware(reduxThunk)
);
