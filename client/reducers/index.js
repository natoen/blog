import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import requestsReducer from './requests_reducer';

const rootReducer = combineReducers({
  data: requestsReducer,
  routing: routerReducer,
});

export default rootReducer;
