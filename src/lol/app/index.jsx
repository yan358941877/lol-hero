import React from 'react'
import propTypes from 'prop-types'

import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'

import '../res/App.less'

function App(props) {
  return (
    <div id="app">
      <AppHeader />
      <h1>This is App</h1>
      {props.children}
      <AppFooter />
    </div>
  )
}

App.propTypes = {
  children: propTypes.element.isRequired
}

export default App
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

