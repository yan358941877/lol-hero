import React from 'react'

class Tabs extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.children)
    return (
      <div className="tab-container">
        {this.props.children}
      </div>
    )
  }
}

export default Tabs
