const shortId = require('shortid');

export const DRINK_CREATE         = 'DRINK_CREATE';
export const DRINK_SELECT         = 'DRINK_SELECT';
export const DRINK_UNSELECT       = 'DRINK_UNSELECT';
export const DRINK_UPDATE         = 'DRINK_UPDATE';
export const DRINK_RECORD_IST     = 'DRINK_RECORD_IST';

export const ORDER_OPEN           = 'ORDER_OPEN';
export const ORDER_CLOSE          = 'ORDER_CLOSE';
export const ORDER_CLOSED         = 'ORDER_CLOSED';
export const ORDER_REOPEN         = 'ORDER_REOPEN';

/*
 * drink: action creators
 */
export function addDrink(name, min, max) {
  return { type : DRINK_CREATE, payload: {name, min, max} };
}

export function selectDrink(drink) {
  return { type : DRINK_SELECT, payload: {...drink} };
}

export function unselectDrink() {
  return { type : DRINK_UNSELECT, payload: {} };
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
export function openOrder(drinks) {
  return { type : ORDER_OPEN, payload: {id: shortId.generate(), drinks} };
}

export function closeOrder(order) {
  return function (dispatch) {
    dispatch({ type : ORDER_CLOSE,  payload: {...order} });
    dispatch({ type : ORDER_CLOSED, payload: {...order} });
  }
}
export function reopenOrder(order) {
  return function (dispatch) {
    dispatch({ type : ORDER_REOPEN,   payload: {...order} });
    dispatch({ type : ORDER_REOPENED, payload: {...order} });
  }
}

export default {
  addDrink,
  selectDrink,
  unselectDrink,
  updateDrink,
  recordIst,

  openOrder,
  closeOrder,
  reopenOrder
};
