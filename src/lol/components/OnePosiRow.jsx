import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import '../res/OnePosiRow.less'

class OnePosiRow extends React.Component {
  static propTypes = {
    hasSelection: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    count: PropTypes.number.isRequired
  }
  static defaultProps = {
    hasSelection: false,
    title: '',
    position: ''
  }
  constructor(props) {
    super(props)
    this.offset = -40
    this.handleClickPre = this.handleClickPre.bind(this)
    this.handleClickBack = this.handleClickBack.bind(this)
  }
  handleClickPre() {
    if (this.carousel) {
      this.offset += 243 * 5
      this.offset = this.offset >= -40 ? 0 : this.offset
      this.carousel.style.transform = `translateX(${this.offset}px)`
    }
  }
  handleClickBack() {
    if (this.carousel) {
      const containerWidth = this.carousel.parentElement.clientWidth
      this.offset = this.offset > -40 ? -40 : this.offset
      this.offset -= 243 * 5
      if (this.offset < (containerWidth - (this.props.count * 243) - 40)) {
        this.offset = containerWidth - (this.props.count * 243) - 40
      }
      this.carousel.style.transform = `translateX(${this.offset}px)`
    }
  }
  render() {
    return (
      <div className={cn('app-row', { selected: this.props.hasSelection })}>
        <div className="row-head">
          <h2 >{this.props.title}</h2>
        </div>
        <div className="row-content">
          <div className="carousel-btn btn-previous" onClick={this.handleClickPre}>
            <i className="octicon icon-chevron-left" />
          </div>
          <div className="row-carousel" ref={(carousel) => { this.carousel = carousel }}>
            {this.props.children}
          </div>
          <div className="carousel-btn btn-next" onClick={this.handleClickBack}>
            <i className="octicon icon-chevron-right" />
          </div>
        </div>
      </div>
    )
  }
}

export default OnePosiRow
