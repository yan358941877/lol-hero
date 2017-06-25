import { createAction } from 'redux-actions'

export default {
  loading: createAction('LOADING'),
  loadComplete: createAction('LOAD_COMPLETE')
}
