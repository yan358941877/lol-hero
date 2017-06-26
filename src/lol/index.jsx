import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import RouterMap from './router/RouterMap'
import configStore from './store'
import './res/index.less'

const store = configStore()

render(
  <Provider store={store}>
    <RouterMap />
  </Provider>,
  document.getElementById('lolMountPoint')
)

