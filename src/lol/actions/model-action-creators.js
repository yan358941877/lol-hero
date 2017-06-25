import { createAction } from 'redux-actions'
import lolApi from '../api/lol'

export default {
  loadTop: createAction('LOAD_TOP', lolApi.loadTop),
  loadJungle: createAction('LOAD_JUNGLE', lolApi.loadJungle),
  loadMid: createAction('LOAD_MID', lolApi.getMid),
  loadADC: createAction('LOAD_ADC', lolApi.loadADC),
  loadSupport: createAction('LOAD_SUPPORT', lolApi.loadSupport)
}
