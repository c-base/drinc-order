import { createReducer } from 'utils';
import * as actions      from '../actions';

const initialState = require('json!./../../config/drinks.json');

// set index as as identifier
initialState.map((drink, index) => drink.id = 'drink-' + (index + 1));

export default createReducer(initialState, {
  [actions.ADD_DRINK]    : (state, action) => [...state, action]
});

export const selectedDrink = createReducer(null, {
  [actions.SELECT_DRINK] : (state, action) => action.id
});
