import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import jobsReducer from '../store/reducers/jobs';
import errorsReducer from '../store/reducers/errors';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    jobs: jobsReducer,
    errors: errorsReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;