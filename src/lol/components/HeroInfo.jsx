import React from 'react'
import PropTypes from 'prop-types'

import '../res/HeroInfo.less'
const roleType = {
  Fighter: '战士',
  Assassin: '刺客',
  Tank: '坦克',
  Mage: '法师',
  Marksman: '射手',
  Support: '辅助'
}

class HeroInfo extends React.Component {
  static propTypes = {
    blurb: PropTypes.string,
    heroAttr: PropTypes.object,
    tags: PropTypes.array
  }
  static defaultProps = {
    blurb: '',
    heroAttr: {},
    tags: []
  }
  render() {
    const { blurb, tags, heroAttr } = this.props
    const heroRoles = tags.map(tag => (
      <span key={tag}>{roleType[tag]}</span>
    ))
    const attackValue = (Number(heroAttr.attack) * 20).toString() + 'px'
    const defenseValue = (Number(heroAttr.defense) * 20).toString() + 'px'
    const difficultyValue =(Number(heroAttr.difficulty) * 20).toString() + 'px'
    const magicValue = (Number(heroAttr.magic) * 20).toString() + 'px'
    return (
      <div className="hero-info">
        <div className="hero-role">
          {heroRoles}
        </div>
        <div className="hero-attr">
          <div className="hero-attr-attack item" key="attack" >
            <span>攻击</span>
            <span className="value-bar attack" style={{ width: attackValue }} />
          </div>
          <div className="hero-attr-defense item" key="defense">
            <span>防御</span>
            <span className="value-bar defense" style={{ width: defenseValue }} />
          </div>
          <div className="hero-attr-difficulty item" key="difficulty">
            <span>难度</span>
            <span className="value-bar difficulty" style={{ width: difficultyValue }} />
          </div>
          <div className="hero-attr-magic item" key="magic">
            <span>魔法</span>
            <span className="value-bar magic" style={{ width: magicValue }} />
          </div>
        </div>
        <div className="hero-backstory">
          <p dangerouslySetInnerHTML={{ __html: blurb }} />
        </div>
      </div>
    )
  }
}

export default HeroInfo
