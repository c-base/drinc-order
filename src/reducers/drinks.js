import { createReducer } from 'utils';
import * as actions      from '../actions';

const initialState = require('json!./../../config/drinks.json');

export default createReducer(initialState, {
  [actions.ADD_DRINK] : (state, action) => [...state, action]
});
