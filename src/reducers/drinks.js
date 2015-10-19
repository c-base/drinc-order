import { createReducer } from 'utils';
import * as actions from '../actions';

// normally this would be imported from /constants, but in trying to keep
// this starter kit as small as possible we'll just define it here.
// const ADD_DRINK = 'ADD_DRINK';

const initialState = [
  {name: 'Premium Bier',     min: 3, max: 20},
  {name: 'Premium Cola',     min: 3, max: 20},
  {name: 'Club Mate',        min: 3, max: 20},
  {name: 'Flora Power Mate', min: 3, max: 20}
];
export default createReducer(initialState, {
  [actions.ADD_DRINK] : (state, action) => [...state, action]
});
