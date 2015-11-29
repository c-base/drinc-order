import { createReducer } from 'utils';
import * as actions      from '../actions';

export default createReducer(null, {
  [actions.DRINK_SELECT] : (state, action) => {
    return Object.assign({}, action);
  },
  [actions.DRINK_UNSELECT] : (state, action) => {
    return null;
  }
});
