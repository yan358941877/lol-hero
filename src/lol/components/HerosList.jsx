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
      selectHero: PropTypes.func.isRequired
    }).isRequired
  }
  static defaultProps = {
    selectedHero: null
  }
  render() {
    const heroCovers = this.props.heros.map((hero) => {
      const title = hero.get('title')
      const imgPos = hero.get('position')
      const area = hero.get('area')
      const url = hero.get('url')
      const startIndex = url.lastIndexOf('/')
      const endIndex = url.indexOf('_')
      const heroID = url.slice(startIndex + 1, endIndex)
      return (
        <HeroCover
          key={title}
          hero={{ title, imgPos, url, area, heroID }}
          position={this.props.position}
          hasSelection={this.props.hasSelection}
          selectedHero={this.props.selectedHero}
          selectAction={this.props.actions.selectHero}
        />
      )
    }).toArray()
    return (
      <div className="hero-carousel">
        <div className="all-hero-covers">
          <ul className="clear-fix">
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
