/*
 * action types
 */
export const ADD_DRINK = 'ADD_DRINK';

/*
 * action creators
 */
export function addDrink(name, min, max) {
  return { type : ADD_DRINK, payload: {name, min, max} };
}

