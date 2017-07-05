import React from 'react'
import PropTypes from 'prop-types'

import '../res/SkillTab.less'


//class SkillTab extends React.Component {
//   static propTypes = {
//     skill: PropTypes.object.isRequired
//   }
//   render() {
//     console.log(this.props.skill)
//     const { skill } = this.props
//     return (
//       <div className="skill-tab">
//         <h3>{skill.name}</h3>
//         <p dangerouslySetInnerHTML={{ __html: skill.description }} />
//         <p dangerouslySetInnerHTML={{ __html: skill.tooltip }} />
//       </div>
//     )
//   }
// }


// export default SkillTab

export default function SkillTab({ skill }) {
  return (
    <div className="skill-tab">
      <h3>{skill.name}</h3>
      <p dangerouslySetInnerHTML={{ __html: skill.description }} />
      <p dangerouslySetInnerHTML={{ __html: skill.tooltip }} />
    </div>
  )
}
SkillTab.propTypes = {
  skill: PropTypes.object.isRequired
}
