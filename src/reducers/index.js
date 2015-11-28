import { combineReducers }  from 'redux';
import drinks               from './drinks';
import selected             from './selected';
import orders               from './orders';

export default combineReducers({
  drinks,
  selected,
  orders
});
