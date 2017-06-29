import React from 'react'
import cn from 'classnames'

import '../res/AppHeader.less'

class AppHeader extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      translucent: true
    }
    this.checkScroll = this.checkScroll.bind(this)
  }
  componentDidMount() {
    // $(document).on('scroll', () => {
    //   console.log('aa')
    //   const translucent = document.body.scrollTop > 5
    //   if (this.state.translucent !== translucent) {
    //     this.setState({
    //       translucent
    //     })
    //   }
    // })
    $(document).on('scroll', this.throttle(this.checkScroll, 50))
  }
  checkScroll() {
    console.log('aaa')
    const translucent = document.body.scrollTop > 25
    if (this.state.translucent !== translucent) {
      this.setState({
        translucent
      })
    }
  }
  debounce(fn, delay) {
    let timer = null
    return function () {
      const context = this
      const args = arguments
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, delay)
    }
  }
  throttle(fn, threshold) {
    let last
    let timer
    threshold = !threshold ? 250 : threshold

    return function () {
      const context = this
      const args = arguments

      const now = +new Date()

      if (last && now < last + threshold) {
        clearTimeout(timer)

        timer = setTimeout(() => {
          last = now
          fn.apply(context, args)
        }, threshold)
      } else {
        last = now
        fn.apply(context, args)
      }
    }
  }
  render() {
    return (
      <div className={cn('app-header', { translucent: this.state.translucent })}>
        <div className="app-header-icon float-left" />
        <div className="app-header-slogon float-left" />
      </div>
    )
  }
}

export default AppHeader
