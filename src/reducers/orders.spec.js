import reducer           from './orders'
import * as actions      from '../actions';

describe('(Reducer) orders', () => {

  const initialState     = [{id: 4}]
  const initialStateMany = [{id: 4}, {id: 5}]

  it('ORDER_CLOSE: should add the opened order to the list', () => {
    const state = reducer(initialState, {type: actions.ORDER_CLOSE, payload: {drinks: []}});
    expect(state.length).to.equal(2)
  })

  it('ORDER_REOPEN: should be empty if state has not enough items', () => {
    const state = reducer([], {type: actions.ORDER_REOPEN, payload: {id: 4}});
    expect(state.length).to.equal(0)
  })

  it('ORDER_REOPEN: should be empty if it contained only one element', () => {
    const state = reducer(initialState, {type: actions.ORDER_REOPEN, payload: {id: 4}});
    expect(state.length).to.equal(0)
  })

  it('ORDER_REOPEN: should remove the opened order from the list', () => {
    const state = reducer(initialStateMany, {type: actions.ORDER_REOPEN, payload: {id: 5}});
    expect(state.length).to.equal(1)
  })
})
