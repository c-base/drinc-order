/*
 * action types
 */
export const ADD_DRINK = 'ADD_DRINK';

/*
 * action creators
 */
export function addDrink(...payload) {
  return { type: ADD_DRINK, payload };
}