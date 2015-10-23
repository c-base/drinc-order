import { createReducer } from 'utils';
import * as actions from '../actions';

// normally this would be imported from /constants, but in trying to keep
// this starter kit as small as possible we'll just define it here.
// const ADD_DRINK = 'ADD_DRINK';

const initialState = [
  {name: 'Berliner Pilsner',        min:  3,   max: 30},
  {name: 'Premium Bier',            min:  3,   max:  5},
  {name: 'Schöfferhofer Hefe hell', min:  2,   max:  4},
  {name: 'Club Mate',               min:  5,   max:  8},
  {name: 'Flora Power Mate',        min: 10,   max: 12},
  {name: 'Kolle Mate',              min:  4,   max:  6},
  {name: 'Premium Cola',            min:  4,   max:  6},
  {name: 'Coca-Cola',               min:  2,   max:  3},
  {name: 'Spezi',                   min:  4,   max:  6}
];
export default createReducer(initialState, {
  [actions.ADD_DRINK] : (state, action) => [...state, action]
});
