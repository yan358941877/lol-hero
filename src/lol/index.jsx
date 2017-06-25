import React from 'react'
import { render } from 'react-dom'
import lolApi from './api/lol'
import './res/index.less'

render(
  <h1>Hello World</h1>,
  document.getElementById('lolMountPoint')
)

lolApi.getADC()
