import React from 'react'
import PropTypes from 'prop-types'

import SkillTabs from './SkillTabs'
import SkillTab from './SkillTab'

import '../res/HeroSkills.less'

class HeroSkills extends React.Component{
  static propTypes = {
    passive: PropTypes.object.isRequired,
    spells: PropTypes.arrayOf(PropTypes.object).isRequired
  }
  render() {
    const { passive, spells } = this.props
    const passiveUrl = 'http://ossweb-img.qq.com/images/lol/img/passive/'
    const otherUrl = 'http://ossweb-img.qq.com/images/lol/img/spell/'
    return (
      <div className="hero-skills">
        <SkillTabs id="skill-tabs" btnTxt={false} >
          <SkillTab key="p" btnimg={passiveUrl + passive.image.full} skill={passive} />
          <SkillTab key="q" btnimg={otherUrl + spells[0].image.full} skill={spells[0]} />
          <SkillTab key="w" btnimg={otherUrl + spells[1].image.full} skill={spells[1]} />
          <SkillTab key="e" btnimg={otherUrl + spells[2].image.full} skill={spells[2]} />
          <SkillTab key="r" btnimg={otherUrl + spells[3].image.full} skill={spells[3]} />
        </SkillTabs>
      </div>
    )
  }
}

export default HeroSkills
