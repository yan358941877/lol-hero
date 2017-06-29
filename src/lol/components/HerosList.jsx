import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Immutable from 'immutable'

import HeroCover from './HeroCover'

import '../res/heros-list.less'

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
          key={title + area}
          hero={{ title, imgPos, url, area, heroID }}
          position={this.props.position}
          hasSelection={this.props.hasSelection}
          selectedHero={this.props.selectedHero}
          selectAction={this.props.actions.selectHero}
        />
      )
    }).toArray()
    return (
      <div className={cn('hero-carousel', this.props.position)} >
        <div className="all-hero-covers">
          <ul ref={(carousel) => { this.carousel = carousel }}>
            {heroCovers}
          </ul>
        </div>
        <div className="carousel-btn btn-previous" />
        <div className="carousel-btn btn-next" />
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
