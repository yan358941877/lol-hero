import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
    this.handleClickPre = this.handleClickPre.bind(this)
    this.handleClickBack = this.handleClickBack.bind(this)
  }
  componentDidMount() {
    this.carousel.style.transform = 'translateX(0px)'
  }
  getOffSet() {
    const translate = this.carousel.style.transform
    const offset = parseInt(translate.match(/([-\d]+)/)[0], 0)
    return offset
  }
  setOffSet(offset) {
    this.carousel.style.transform = `translateX(${offset}px)`
  }
  handleClickPre() {
    if (this.carousel) {
      let offset = this.getOffSet()
      offset += 900
      offset = offset >= -40 ? 0 : offset
      this.setOffSet(offset)
    }
  }
  handleClickBack() {
    if (this.carousel) {
      const containerWidth = this.carousel.offsetWidth
      const maxOffSet = this.carousel.scrollWidth
      let offset = this.getOffSet()
      offset = offset > -40 ? -40 : offset
      offset -= 900
      if (offset < (containerWidth - maxOffSet)) {
        offset = containerWidth - maxOffSet
      }
      this.setOffSet(offset)
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
        <ReactCSSTransitionGroup
          transitionName="detail-bar-transition"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={300}
        >
          {this.props.detailBar}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default OnePosiRow
