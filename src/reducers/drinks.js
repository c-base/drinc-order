import { createReducer } from 'utils';
import * as actions      from '../actions';

const initialState = require('json!./../../config/drinks.json');

// set index as as identifier
const generateId = (index) => 'drink-' + (index + 1);
initialState.map((drink, index) => drink.id = generateId(index));


export default createReducer(initialState, {
  [actions.ADD_DRINK]    : (state, action) => [...state, {id: generateId(state.length), ...action}]
});

export const selectedDrink = createReducer(null, {
  [actions.SELECT_DRINK] : (state, action) => action.id
});
