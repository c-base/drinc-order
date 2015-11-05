import { createReducer } from 'utils';
import * as actions      from '../actions';

const orders = [];// require('json!./../../config/orders.json');

// set index as as identifier
// https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318#.qg6ukw2i9


export default createReducer(orders, {
  [actions.ORDER_CREATE]         : (state, action) => [...state, {...action}],
  [actions.ORDER_CREATE_SUCCESS] : (state)         => state
});
