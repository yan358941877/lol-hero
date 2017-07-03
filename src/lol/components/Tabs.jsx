import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import '../res/Tabs.less'

class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
  }
  static defaultProps = {
    children: []
  }
  constructor(props) {
    super(props)
    this.state = {
      selectedTabId: 'hero-info'
    }
  }
  render() {
    const tabs = []
    const buttons = []
    const children = this.props.children
    const { selectedTabId } = this.state
    React.Children.map(children, (tab) => {
      const id = tab.props.id
      const title = tab.props.title
      tabs.push(
        <li className={cn('tab-items', { selected: selectedTabId === id })} key={id} >
          {tab.props.children}
        </li>
      )
      buttons.push(
        <li
          className={cn('tab-button', { selected: selectedTabId === id })}
          key={id}
          onClick={() => { this.setState({ selectedTabId: id }) }}
        >
          {title}
        </li>
      )
    })

    return (
      <div className="tab-container">
        <ul className="tab-items">
          {tabs}
        </ul>
        <ul className="tab-buttons">
          {buttons}
        </ul>
      </div>
    )
  }
}

export default Tabs
