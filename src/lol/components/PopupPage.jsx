import React from 'react'
import PropTypes from 'prop-types'

import '../res/PopupPage.less'

class PopupPage extends React.Component {
  static propTypes = {
    close: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {
      height: 0
    }
  }
  // componentDidMount() {
  //   if (this.popup) {
  //     const toTop = this.popup.offsetTop
  //     const windowHeihgt = window.outerHeight
  //     this.setState({
  //       height: windowHeihgt - toTop
  //     })
  //   }
  // }
  render() {
    const close = this.props.close
    return (
      <div className="popup-page" >
        <a className="close-button" role="button" onClick={typeof close === 'function' ? close : null} >
          <i className="octicon icon-x" />
        </a>
        <div className="jumbotron-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default PopupPage
