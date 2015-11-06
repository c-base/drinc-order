import { createReducer } from 'utils';
import * as actions      from '../actions';

const initialState = require('json!./../../config/drinks.json');

// set identifier
const generateId = (index) => 'drink-' + (index + 1);
const drinkFactory = (drink, index) => {
  drink.id = generateId(index);
  drink.ist = drink.ist || null;
  drink.istHistory = drink.istHistory || [];
  return drink;
};
initialState.map((drink, index) => {
  drinkFactory(drink, index);
});


export default createReducer(initialState, {
  [actions.DRINK_CREATE]     : (state, action) => [...state, drinkFactory(action, state.length)],
  [actions.DRINK_RECORD_IST] : (state, action) => {
    const index = state.findIndex((element) => element.id === action.id);
    const drink = Object.assign({}, state[index], {
      ist: action.ist,
      istHistory: [...state[index].istHistory, {ist: action.ist, date: new Date()}]
    });
    return [...state.slice(0, index), drink, ...state.slice(index + 1)];
  }
});
