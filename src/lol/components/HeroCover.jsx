import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import cn from 'classnames'

import '../res/HeroCover.less'

class HeroCover extends React.Component {
  static propTypes = {
    hasSelection: PropTypes.bool.isRequired,
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
    const heroID = this.props.hero.heroID
    if (this.checkSelected(heroID)) {
      this.props.selectAction('')
      return
    }
    if (this.props.selectAction) {
      this.props.selectAction(heroID)
      const offsetTop = $(this.item).offset().top - 80
      //$(document.body).scrollTop(offsetTop)
      setTimeout(() => {
        $(document.body).animate({
          scrollTop: offsetTop
        }, 250);
      }, 400);
    }
  }
  checkSelected(heroID) {
    let isSelected = false
    if (this.props.selectedHero) {
      const selectedID = this.props.selectedHero.getIn(['data', 'id'])
      try {
        isSelected = selectedID.toLowerCase() === heroID.toLowerCase()
      } catch (error) {
        isSelected = false
      }
    }
    return isSelected
  }
  render() {
    const { area, heroID, imgPos, title, url } = this.props.hero
    const isSelected = this.checkSelected(heroID)
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
