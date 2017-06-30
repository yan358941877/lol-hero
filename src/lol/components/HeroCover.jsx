import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import cn from 'classnames'

import '../res/HeroCover.less'

class HeroCover extends React.Component {
  static propTypes = {
    hasSelection: PropTypes.bool.isRequired,
    position: PropTypes.string.isRequired,
    selectedHero: PropTypes.objectOf(Immutable.Map),
    selectAction: PropTypes.func.isRequired,
    hero: PropTypes.object.isRequired
  }
  static defaultProps = {
    selectedHero: Immutable.fromJS({})
  }
  constructor(props) {
    super(props)
    this.handleSelectHero = this.handleSelectHero.bind(this)
  }
  handleSelectHero() {
    if (this.props.selectAction) {
      const heroID = this.props.hero.heroID
      this.props.selectAction(heroID)
      const offsetTop = $(this.item).offset().top - 80
      $(document.body).scrollTop(offsetTop)
    }
  }
  render() {
    const { area, heroID, imgPos, title, url } = this.props.hero
    let isSelected = false
    if (this.props.selectedHero) {
      const selectedID = this.props.selectedHero.getIn(['data', 'id'])
      isSelected = selectedID.toLowerCase() === heroID.toLowerCase()
    }
    return (
      <li
        className={cn('hero-cover', { selected: isSelected })}
        style={{ backgroundImage: url, backgroundPosition: imgPos }}
        onClick={this.handleSelectHero}
        ref={(item) => { this.item = item }}
      >
        <div className="hero-cover-info">
          <div className="simple-info">
            <p className="hero-title">{title}</p>
            <p className="hero-area">{area}</p>
          </div>
        </div>
        <div className={cn('mask', { 'no-selected': !isSelected }, { 'has-selection': this.props.hasSelection })} />
      </li>
    )
  }
}

export default HeroCover
