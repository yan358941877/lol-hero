import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import '../res/one-posi-row.less'

// class OnePosiRow extends React.Component {
//   static
//   render() {
//     return (
//       <div className="app-row">
//         <h2>{this.props.title}</h2>
//         {this.props.children}
//       </div>
//     )
//   }
// }

// export default OnePosiRow

export default function OnePosiRow(props) {
  return (
    <div className="app-row">
      <h2 className={cn({ selected: props.hasSelection })}>{props.title}</h2>
      {props.children}
    </div>
  )
}

OnePosiRow.propTypes = {
  hasSelection: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

OnePosiRow.defaultProps = {
  hasSelection: false,
  title: '',
  position: ''
}
