import React from 'react'
import { connect } from 'react-redux'

import Jumbotron from '../components/Jumbotron'

const mapStateToProps = state => ({
  hero: state.getIn(['hero', 'selectedHero'])
})

export default connect(mapStateToProps)(Jumbotron)

