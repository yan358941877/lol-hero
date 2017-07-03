import React from 'react'

class Tab extends React.Component {
  render(){
    return (
      <div className="Tab">
        <p>This is {this.props.id}</p>
      </div>
    )
  }
}

export default Tab
