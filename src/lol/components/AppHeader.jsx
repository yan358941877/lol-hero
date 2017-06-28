import React from 'react'
import cn from 'classnames'

import '../res/AppHeader.less'

class AppHeader extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      translucent: true
    }
  }
  componentDidMount() {
    $(document).on('scroll', () => {
      const translucent = document.body.scrollTop > 5
      if (this.state.translucent !== translucent) {
        this.setState({
          translucent
        })
      }

    })
  }
  render() {
    return (
      <div className={cn('app-header', { translucent: this.state.translucent })}>
        <div className="app-header-icon" />
      </div>
    )
  }
}

export default AppHeader
