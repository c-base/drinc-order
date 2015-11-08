import { createReducer } from 'utils';
import * as actions      from '../actions';

const initialState = require('json!./../../config/state.json');

// set identifier
const generateId = (index) => 'drink-' + (index + 1);
const drinkFactory = (drink, index) => {
  Object.assign(drink, {
    id         : generateId(index),
    liter      : 0.5,
    volume     : 0.0,
    priceCrew  : 1.3,
    priceAlien : 2.0,
    ist        : null,
    istHistory : [],
    min        : 0,
    max        : 0,
    group      : 'NONE',
    inProgram  : true,
    ingredients: {
      caffeine     : false,
      coloring     : false,
      sweeteners   : false,
      antioxidants : false,
      sulfites     : false
    }
  }, {...drink});
  return drink;
};
initialState.drinks.map((drink, index) => {
  drinkFactory(drink, index);
});

export default createReducer(initialState.drinks, {
  [actions.DRINK_CREATE]     : (state, action) => [...state, drinkFactory(action, state.length)],
  [actions.DRINK_RECORD_IST] : (state, action) => {
    const index = state.findIndex((element) => element.id === action.id);
    const drink = Object.assign({}, state[index], {
      ist: action.ist,
      istHistory: [...state[index].istHistory, {ist: action.ist, date: new Date()}]
    });
    return [...state.slice(0, index), drink, ...state.slice(index + 1)];
  },
  [actions.DRINK_UPDATE] : (state, action) => {
    const index = state.findIndex((element) => element.id === action.id);
    const drink = Object.assign({}, action);
    return [...state.slice(0, index), drink, ...state.slice(index + 1)];
  }
});
