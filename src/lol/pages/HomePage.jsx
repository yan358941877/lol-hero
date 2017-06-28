import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Immutable from 'immutable'
import PropTypes from 'prop-types'

import modelActionCreators from '../actions/model-action-creators'

class HomePage extends React.Component {
  static propTypes = {
    models: PropTypes.objectOf(Immutable.Map).isRequired,
    actions: PropTypes.shape({
      loadTop: PropTypes.func.isRequired,
      loadJungle: PropTypes.func.isRequired,
      loadMid: PropTypes.func.isRequired,
      loadADC: PropTypes.func.isRequired,
      loadSupport: PropTypes.func.isRequired
    }).isRequired
  }

  componentDidMount() {
    this.props.actions.loadTop()
    this.props.actions.loadJungle()
    this.props.actions.loadMid()
    this.props.actions.loadADC()
    this.props.actions.loadSupport()
  }
  render() {
    return (
      <div>HomePage</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    models: state.get('models')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(modelActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

