import { createReducer } from 'utils';
import * as actions      from '../actions';

export default createReducer(null, {
  [actions.ORDER_OPEN]         : (state, action) => {
    return Object.assign({}, action, {
      drinks: action.drinks
        .filter(drink => drink.ist !== null)
        .filter(drink => (drink.max - drink.ist) > 0),
      dateCreated: new Date(),
      dateUpdated: new Date(),
    })
  },
  [actions.ORDER_CLOSED]       : (state, action) => {
    return null
  },
  [actions.ORDER_REOPEN]       : (state, action) => {
    return state === null
      ? Object.assign({}, action)
      : state
  }
});
