const shortId = require('shortid');

export const DRINK_CREATE         = 'DRINK_CREATE';
export const DRINK_SELECT         = 'DRINK_SELECT';
export const DRINK_UPDATE         = 'DRINK_UPDATE';
export const DRINK_RECORD_IST     = 'DRINK_RECORD_IST';

export const ORDER_CREATE         = 'ORDER_CREATE';
export const ORDER_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS';

/*
 * drink: action creators
 */
export function addDrink(name, min, max) {
  return { type : DRINK_CREATE, payload: {id: shortId.generate(), name, min, max, ist: null} };
}

export function selectDrink(drink) {
  return { type : DRINK_SELECT, payload: {...drink} };
}

export function updateDrink(drink) {
  return { type : DRINK_UPDATE, payload: {...drink} };
}

export function recordIst(id, ist) {
  return { type : DRINK_RECORD_IST, payload: {id, ist} };
}

/*
 * order: action creators
 */
export function createOrderSuccess(order) {
  return { type : ORDER_CREATE_SUCCESS, payload: {id: order.id} };
}

export function createOrder(drinks) {
  return (dispatch) => {
    const order = { type : ORDER_CREATE, payload: {id: shortId.generate(), date: new Date(), drinks} };
    dispatch(order);
    // dispatch(createOrderSuccess(order.payload));
  };
}

export default {
  addDrink,
  selectDrink,
  updateDrink,
  recordIst,

  createOrder
};
