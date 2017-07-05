import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import '../res/SkillTabs.less'

class SkillTabs extends React.Component {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    id: PropTypes.string.isRequired,
    btnTxt: PropTypes.bool
  }
  static defaultProps = {
    btnTxt: true,
  }
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }
  }
  render() {
    const { children, id, btnTxt } = this.props
    const tabButton = []
    const tabItem = []
    React.Children.map(children, (item, index) => {
      const btnimg = item.props.btnimg
      tabItem.push(
        <li
          key={item.key}
          className={cn({ selected: index === this.state.selectedIndex })}
        >
          {item}
        </li>)
      if (!btnTxt) {
        tabButton.push(
          <li
            key={item.key}
            onClick={() => { this.setState({ selectedIndex: index }) }}
            className={cn({ selected: index === this.state.selectedIndex })}
          >
            <img src={btnimg} alt={item.key} />
          </li>
        )
      } else {
        tabButton.push(
          <li key={item.key} className={cn({ selected: index === this.state.selectedIndex })}>
            <p>{item.btnWord}</p>
          </li>
        )
      }
    })
    return (
      <div id={id} className="clear-fix">
        <div className="skilltab-button float-left">
          <ul>
            {tabButton}
          </ul>
        </div>
        <div className="skilltab-content float-left">
          <ul>
            {tabItem}
          </ul>
        </div>
      </div>
    )
  }
}

export default SkillTabs
