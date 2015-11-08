import { combineReducers }  from 'redux';
import drinks               from './drinks';
import orders               from './orders';

export default combineReducers({
  drinks,
  orders
});
