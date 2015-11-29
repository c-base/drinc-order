import { combineReducers }  from 'redux';
import drinks               from './drinks';
import selectedDrink        from './selectedDrink';
import orders               from './orders';
import openOrder            from './openOrder';

export default combineReducers({
  drinks,
  selectedDrink,
  orders,
  openOrder
});
