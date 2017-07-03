import React from 'react'
import Immutable from 'immutable'
import PropTypes from 'prop-types'

import Tabs from './Tabs'
import Tab from './Tab'

class Jumbotron extends React.Component {
  static propTypes = {
    hero: PropTypes.objectOf(Immutable.Map).isRequired
  }
  render() {
    console.log(this.props.hero)
    return (
      <div className="jumbotron">
        <div className="jumbotron-title">
          <h1></h1>
        </div>
        <Tabs>
          <Tab id="hero-info" title="背景">

          </Tab>
          <Tab id="hero-skill" title="技能" >

          </Tab>
          <Tab id="hero-use" title="操作" >

          </Tab>
        </Tabs>

      </div>
    )
  }
}

export default Jumbotron
