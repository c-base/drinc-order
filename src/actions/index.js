/*
 * action types
 */
export const ADD_DRINK = 'ADD_DRINK';

/*
 * action creators
 */
export function addDrink(name) {
  return { type : ADD_DRINK, payload: {name: name, min: 0, max: 0} };
}

