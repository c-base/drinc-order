import { combineReducers } from 'redux';
import counter from './counter';
import drinks from './drinks';

export default combineReducers({
  counter,
  drinks
});
