import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import '../res/HeroSlides.less'

class HeroSlides extends React.Component {
  static propTypes = {
    imgs: PropTypes.array.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0
    }
    this.timer = null
  }
  componentDidMount() {
    const { imgs } = this.props
    const imgNum = imgs.length
    this.timer = setInterval(() => {
      let index = this.state.slideIndex
      index = (index + 1) % imgNum
      this.setState({
        slideIndex: index
      })
    }, 3000)
  }
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }
  render() {
    const { imgs } = this.props
    const { slideIndex } = this.state
    const imgUrl = 'http://ossweb-img.qq.com/images/lol/web201310/skin/big' + imgs[slideIndex].id + '.jpg'

    return (
      <div className="hero-slides">
        {/*<ReactCSSTransitionGroup
          transitionName="slide-transition"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}
        >*/}
        <div
          className="show-image"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
        {/*</ReactCSSTransitionGroup>*/}
        <div className="slides-mask" />
      </div>
    )
  }
}

export default HeroSlides
