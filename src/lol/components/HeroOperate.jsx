import React from 'react'
import PropTypes from 'prop-types'

import '../res/HeroOperate.less'

export default function HeroOperate({ allytips, enemytips, name }) {
  const useSkills = allytips.map(skill => (
    <p key={skill.slice(0, 5)}>{skill}</p>
  ))
  const opposeSkills = enemytips.map(skill => (
    <p key={skill.slice(0, 5)}>{skill}</p>
  ))
  return (
    <div className="hero-operate">
      <div className="hero-allytips">
        <h3>当你使用{name}时</h3>
        {useSkills}
      </div>
      <div className="hero-enemytips">
        <h3>当你对抗{name}时</h3>
        {opposeSkills}
      </div>
    </div>
  )
}

HeroOperate.propTypes = {
  allytips: PropTypes.array.isRequired,
  enemytips: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
}
