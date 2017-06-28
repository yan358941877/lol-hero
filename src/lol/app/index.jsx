import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import ProgressBar from '../components/ProgressBar'
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

import '../res/App.less'

function App(props) {
  const isLoading = props.status.get('isLoading')
  return (
    <div id="app">
      <ProgressBar isLoading={isLoading} />
      <AppHeader />
      {props.children}
      <AppFooter />
    </div>
  )
}
App.propTypes = {
  children: PropTypes.element.isRequired,
  status: PropTypes.objectOf(Immutable.Map).isRequired
}

const mapStateToProps = state => ({ status: state.get('status') })


export default connect(mapStateToProps)(App)
// class App extends React.Component {
//   static propTypes = {
//     children: propTypes.element.isRequired
//   }

//   render() {
//     return (
//       <div>
//         <h1>This is App</h1>
//         {this.props.children}
//       </div>
//     )
//   }
// }

// export default App

