import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Immutable from 'immutable'

import HeroCover from './HeroCover'

class HerosList extends React.Component {
  static propTypes = {
    heros: PropTypes.objectOf(Immutable.List).isRequired,
    hasSelection: PropTypes.bool.isRequired,
    position: PropTypes.string.isRequired,
    selectedHero: PropTypes.objectOf(Immutable.Map),
    actions: PropTypes.shape({
      selectedHero: PropTypes.func.isRequired
    }).isRequired
  }
  static defaultProps = {
    selectedHero: null
  }
  render() {
    const heroCovers = this.props.heros.map((hero, index) => {
      const title = hero.get('title')
      return (
        <HeroCover key={title} hero={hero} />
      )
    }).toArray()
    return (
      <div className="hero-carousel">
        <div className="all-hero-covers">
          <ul>
            {heroCovers}
          </ul>
        </div>
      </div>
    )
  }
}

export default HerosList

// let url = this.props.heros.getIn([3, 'url'])
//     if (url) {
//       let startIndex = url.lastIndexOf('/')
//       let endIndex = url.indexOf('_')
//       console.log(url.slice(startIndex+1, endIndex))
//     }
