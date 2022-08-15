import React from 'react'
import { Icon } from "../MainStyle"
import { Midh5, Lightbody2} from "../Headings"

function AboutItem({icon, title, text}) {
  return (
    <li className="about-item">
        <Icon src={icon} className="about-icon"/>

        <div className="ai-right">
            <Midh5 color='primary' className='ai-title'>{title}</Midh5>
            <Lightbody2 className='ai-text'>{text}</Lightbody2>
        </div>
    </li>
  )
}

export default AboutItem