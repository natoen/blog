import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import requestsReducer from './requests_reducer';
import imageLoaderReducer from './image_loader_reducer';

const rootReducer = combineReducers({
  data: requestsReducer,
  imageLoaded: imageLoaderReducer,
  routing: routerReducer,
});

export default rootReducer;
