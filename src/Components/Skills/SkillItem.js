import React from 'react'
import { Midh5 } from "../Headings"
import { SkillIcon } from "../MainStyle"

function SkillItem({language, name}) {
  return (
    <div className='SkillItem'>
        <SkillIcon src={language} alt="Language İcon" className= "SH-icon"/>

        <div className="SkillItem-Hover">
            <Midh5 className='SH-text'>{ name }</Midh5>
        </div>
    </div>
  )
}

export default SkillItem