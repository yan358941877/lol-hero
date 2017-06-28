import React from 'react'

class OnePosiRow extends React.Component {
  render() {
    return (
      <div className="app-row">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    )
  }
}

export default OnePosiRow
