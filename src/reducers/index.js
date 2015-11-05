import { combineReducers }  from 'redux';
import counter              from './counter';
import drinks               from './drinks';
import orders               from './orders';

export default combineReducers({
  counter,

  drinks,

  orders
});
