/*
 * action types
 */
export const ADD_DRINK    = 'ADD_DRINK';
export const UPDATE_DRINK = 'UPDATE_DRINK';
export const SELECT_DRINK = 'SELECT_DRINK';

/*
 * action creators
 */
export function addDrink(name, min, max) {
  return { type : ADD_DRINK, payload: {name, min, max} };
}

export function updateDrink(id, name, min, max) {
  return { type : UPDATE_DRINK, payload: {id, name, min, max} };
}

export function selectDrink(id) {
  return { type : SELECT_DRINK, payload: {id} };
}

export default {
  addDrink,
  updateDrink,
  selectDrink
};
