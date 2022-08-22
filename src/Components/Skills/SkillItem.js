import React from 'react'
import { Midh5 } from "../Headings"

function SkillItem({language, name}) {
  return (
    <div className='SkillItem'>
        <img src={language} alt="Language İcon" className= "SH-icon"/>

        <div className="SkillItem-Hover">
            <Midh5 className='SH-text'>{ name }</Midh5>
        </div>
    </div>
  )
}

export default SkillItem