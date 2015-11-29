import reducer           from './drinks'
import * as actions      from '../actions';

describe('(Reducer) drinks', () => {

  let initialState = [{
    "name": "Club Mate",
    "min": 5,
    "max": 8,
    "id": "drink-1",
    "ist": null,
    "istHistory": []
  }]

  it('DRINK_CREATE: should return the created drink', () => {
    const state = reducer([], {type: actions.DRINK_CREATE, payload: {name: 'New Drink'}});
    expect(state[0].id).to.equal('drink-1')
    expect(state.length).to.equal(1)
  })

  it('DRINK_RECORD_IST: should set the ist value', () => {
    const drink = {id: 'drink-1', ist: null, istHistory: []}
    const state = reducer(initialState, {type: actions.DRINK_RECORD_IST, payload: {id: 'drink-1', ist: 23}});
    expect(state[0].ist).to.equal(23)
  })

  it('DRINK_UPDATE: should update the a drink', () => {
    const state = reducer(initialState, {type: actions.DRINK_UPDATE, payload: {id: 'drink-1', max: 42}});
    expect(state[0].max).to.equal(42)
  })

})
