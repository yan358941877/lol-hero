import React from 'react'
import propTypes from 'prop-types'

class App extends React.Component {
  static propTypes = {
    children: propTypes.element.isRequired
  }

  render() {
    return (
      <div>
        <h1>This is App</h1>
        {this.props.children}
      </div>
    )
  }
}

export default App
