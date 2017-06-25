import { createAction } from 'redux-actions'
import lolApi from '../api/lol'

export default {
  selectHero: createAction('SELECT_HERO'),
  loadHero: createAction('LOAD_HERO', lolApi.loadHero)
}
