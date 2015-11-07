import { createReducer } from 'utils';
import * as actions      from '../actions';

const orders = [];// require('json!./../../config/orders.json');

// set index as as identifier
// https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318#.qg6ukw2i9

export default createReducer(orders, {
  [actions.ORDER_OPEN]         : (state, action) => {
    const index = state.findIndex((element) => element.state === 'open');
    console.log(index)
    if (index > -1) {
      const order = Object.assign({}, state[index], {
        drinks: action.drinks
          .filter(drink => drink.ist !== null)
          .filter(drink => (drink.max - drink.ist) > 0),
        dateUpdated: new Date()
      });
      return [...state.slice(0, index), order, ...state.slice(index + 1)];
    }

    const order = Object.assign({}, action, {
      drinks: action.drinks
        .filter(drink => drink.ist !== null)
        .filter(drink => (drink.max - drink.ist) > 0),
      dateCreated: new Date(),
      dateUpdated: new Date(),
      state: 'open'
    });
    return [...state, order]
  },
  [actions.ORDER_CLOSE]          : (state, action) => {
    const index = state.findIndex((element) => element.id === action.id);
    const order = Object.assign({}, state[index], {
      state: 'close'
    });
    return [...state.slice(0, index), order, ...state.slice(index + 1)];
  },
  [actions.ORDER_REOPEN]         : (state, action) => {
    let index = state.findIndex((element) => element.state === 'open');
    if (index >= 0) { // other open order
      return state;
    }
    index = state.findIndex((element) => element.id === action.id);
    const order = Object.assign({}, state[index], {
      state: 'open'
    });
    return [...state.slice(0, index), order, ...state.slice(index + 1)];
  }
});
