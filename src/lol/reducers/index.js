import { combineReducers } from 'redux-immutable'

import hero from './hero'
import models from './models'
import status from './status'

export default combineReducers({
  hero,
  models,
  status
})
