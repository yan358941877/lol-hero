import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import '../res/OnePosiRow.less'

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
    <div className={cn('app-row', { selected: props.hasSelection })}>
      <div className="row-head">
        <h2 >{props.title}</h2>
      </div>
      <div className="row-content">
        <div className="carousel-btn btn-previous">
          <i className="octicon icon-chevron-left" />
        </div>
        <div className="row-carousel">
          {props.children}
        </div>
        <div className="carousel-btn btn-next">
          <i className="octicon icon-chevron-right" />
        </div>
      </div>
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
