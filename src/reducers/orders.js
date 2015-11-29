import { createReducer } from 'utils';
import * as actions      from '../actions';

const orders = [];// require('json!./../../config/orders.json');
// https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318#.qg6ukw2i9

export default createReducer(orders, {
  [actions.ORDER_CLOSE]          : (state, action) => {
    return [...state, action]
  },
  [actions.ORDER_REOPEN]         : (state, action) => {
    if (state.length <= 1) {
      return []
    }
    const index = state.findIndex((element) => element.id == action.id);
    return [...state.slice(0, index), ...state.slice(index + 1)];
  }
});
