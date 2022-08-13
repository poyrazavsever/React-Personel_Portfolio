import React from 'react'
import { Icon } from "../MainStyle"
import { Midh4, Lightbody} from "../Headings"

function AboutItem({icon, title, text}) {
  return (
    <li className="about-item">
        <Icon src={icon} className="about-icon"/>

        <div className="ai-right">
            <Midh4 color='purple' className='ai-title'>{title}</Midh4>
            <Lightbody className='ai-text'>{text}</Lightbody>
        </div>
    </li>
  )
}

export default AboutItem