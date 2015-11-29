import reducer           from './openOrder'
import * as actions      from '../actions';

describe('(Reducer) openOrder', () => {

  it('ORDER_OPEN: should return the created order', () => {
    const state = reducer(null, {type: actions.ORDER_OPEN, payload: {drinks: []}});
    expect(state).to.be.an.object
    expect(['drinks', 'dateCreated', 'dateUpdated']).to.eql(Object.keys(state))
    expect([]).to.eql(state.drinks)
  })

  it('ORDER_CLOSED: should unset openOrder', () => {
    const state = reducer({drinks: []}, {type: actions.ORDER_CLOSED, payload: {}});
    expect(state).to.be.null
  })

})
