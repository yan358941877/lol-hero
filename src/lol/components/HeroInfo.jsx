import React from 'react'

class HeroInfo extends React.Component {
  render() {
    return (
      <div className="HeroInfo">
        {this.props.blurb}
      </div>
    )
  }
}

export default HeroInfo
