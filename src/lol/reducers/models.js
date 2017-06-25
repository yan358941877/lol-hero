import { handleActions } from 'redux-actions'
import Immutable from 'immutable'

import actionCreators from '../actions/model-action-creators'

const initState = Immutable.fromJS({
  top: { count: 0, heros: [] },
  jungle: { count: 0, heros: [] },
  mid: { count: 0, heros: [] },
  adc: { count: 0, heros: [] },
  support: { count: 0, heros: [] }
})

export default handleActions({
  [actionCreators.loadTop](state, { payload: top }) {
    return state.set('top', top)
  },
  [actionCreators.loadJungle](state, { payload: jungle }) {
    return state.set('jungle', jungle)
  },
  [actionCreators.loadMid](state, { payload: mid }) {
    return state.set('mid', mid)
  },
  [actionCreators.loadADC](state, { payload: adc }) {
    return state.set('adc', adc)
  },
  [actionCreators.loadSupport](state, { payload: support }) {
    return state.set('support', support)
  }
}, initState)
