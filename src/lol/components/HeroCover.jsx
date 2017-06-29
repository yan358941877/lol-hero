import React from 'react'

import '../res/hero-cover.less'

class HeroCover extends React.Component {
  render() {
    const url = this.props.hero.url
    const imgPos = this.props.hero.imgPos
    return (
      <li className="hero-cover" style={{ backgroundImage: url, backgroundPosition: imgPos }} />
    )
  }
}

export default HeroCover
