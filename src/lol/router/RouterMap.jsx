import React from 'react'
import { browserHistory, Router, IndexRoute, Route } from 'react-router'

import App from '../app'
import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage'

export default function RouterMao() {
  return (
    <Router history={browserHistory}>
      <Route path="/lol" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/search" component={SearchPage} />
      </Route>
    </Router>
  )
}
