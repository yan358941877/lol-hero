import { handleActions } from 'redux-actions'
import Immutable from 'immutable'

import actionCreators from '../actions/hero-action-creators'

const initialState = Immutable.fromJS({
  selectedHero: null,
  selectedPosition: null
})

export default handleActions({
  [actionCreators.selectHero](state, { payload: selection }) {
    if (selection) {
      const { hero, position } = selection
      return state.merge({
        selectedHero: hero,
        selectedPosition: position
      })
    }
    return initialState
  },
  [actionCreators.loadHero](state, { payload: hero }) {
    return state.set('selectedHero', hero)
  }
}, initialState)
