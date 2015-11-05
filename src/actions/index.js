const shortId = require('shortid');

export const DRINK_CREATE         = 'DRINK_CREATE';
export const DRINK_UPDATE         = 'DRINK_UPDATE';

export const ORDER_CREATE         = 'ORDER_CREATE';
export const ORDER_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS';
export const ORDER_DRINK_IST      = 'ORDER_DRINK_IST';

/*
 * drink: action creators
 */
export function addDrink(name, min, max) {
  return { type : DRINK_CREATE, payload: {id: shortId.generate(), name, min, max} };
}

export function updateDrink(id, name, min, max) {
  return { type : DRINK_UPDATE, payload: {id, name, min, max} };
}

/*
 * order: action creators
 */
export function createOrder(drinks) {
  return { type : ORDER_CREATE, payload: {id: shortId.generate(), date: new Date(), drinks} };
}

export function createOrderSuccess(orders) {
  return { type : ORDER_CREATE_SUCCESS, payload: {orders} };
}

export function addOrder(drinks) {
  return function (dispatch) {
    const order = createOrder(drinks);
    dispatch(order.payload);
    dispatch(createOrderSuccess(order.payload));
  };
}

export default {
  addDrink,
  updateDrink,
  addOrder
};
