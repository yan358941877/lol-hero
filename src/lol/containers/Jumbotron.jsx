import React from 'react'
import { connenct } from 'react-redux'

import Jumbotron from '../components/Jumbotron'

const mapStateToProps = state => ({
  hero: state.getIn(['hero', 'selectedHero'])
})

export default connenct(mapStateToProps)(Jumbotron)

