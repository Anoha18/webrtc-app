import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from './user/user.reducer';
import globalErrorReducer from './global-error/global-error.reducer';

export default createStore(
  combineReducers({
    user: userReducer,
    globalError: globalErrorReducer,
  }),
  composeWithDevTools(
    applyMiddleware(reduxThunk)
  )
);
