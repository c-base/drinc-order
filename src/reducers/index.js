import { combineReducers }       from 'redux';
import counter                   from './counter';
import drinks, { selectedDrink } from './drinks';

export default combineReducers({
  counter,
  drinks,
  selectedDrink
});
