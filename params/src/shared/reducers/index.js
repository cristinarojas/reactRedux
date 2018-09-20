// Dependencies
import { combineReducers } from 'redux';

// shared Reducer
import device from './deviceReducer';

const rootReducer = combineReducers({
  device
});

export default rootReducer;
