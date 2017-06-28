import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import '../res/ProgressBar.less'

class ProgressBar extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired
  }
  static defaultProps = {
    isLoading: false
  }
  constructor(props) {
    super(props)
    this.state = {
      percent: 0
    }
    this.timer = 0
    this.clearTimer = this.clearTimer.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    // 进度条没有处于加载过程中，但是父组件传来了正在加载的状态
    if (!this.props.isLoading && nextProps.isLoading) {
      this.clearTimer()
      this.setState({
        percent: 10
      })
      this.timer = setInterval(() => {
        this.setState((currentstate) => {
          let percent = currentstate.percent
          if (currentstate.state < 90) {
            percent += 5
          } else if (currentstate.state < 95) {
            percent += 1
          } else {
            percent = 95
          }
          return { percent }
        })
      }, 500)
    } else if (this.props.isLoading && !nextProps.isLoading) {
      this.setState({ percent: 100 })
      this.clearTimer()
    }
    // if (nextProps.isLoading !== this.props.isLoading) {
    //   this.clearTimer()
    //   if (nextProps.isLoading) {
    //     this.setState({
    //       precent: 15
    //     })
    //     this.timer = setInterval(() => {
    //       this.setState((currentState) => {
    //         let percent = currentState.percent
    //         if (percent >= 98) {
    //           percent = 98
    //         } else if (percent >= 90) {
    //           percent += 1
    //         } else {
    //           percent += 15
    //         }
    //         return { percent }
    //       })
    //     }, 500)
    //   } else {
    //     this.setState({
    //       percent: 100
    //     })
    //   }
    // }
  }
  componentDidUpdate() {

  }
  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }

  render() {
    const percent = this.state.percent
    return (
      <div className={cs('progress-bar', { loading: this.props.isLoading })}>
        <div className="percentage" style={{ width: `${percent}%` }} />
      </div>
    )
  }
}

export default ProgressBar
