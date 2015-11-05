import { createReducer } from 'utils';
import * as actions      from '../actions';

const initialState = require('json!./../../config/drinks.json');

// set index as as identifier
const generateId = (index) => 'drink-' + (index + 1);
initialState.map((drink, index) => drink.id = generateId(index));


export default createReducer(initialState, {
  [actions.DRINK_CREATE]    : (state, action) => [...state, {id: generateId(state.length), ...action}]
});
