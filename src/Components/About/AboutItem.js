import React from 'react'
import { Icon } from "../MainStyle"
import { Midh3, Lightbody} from "../Headings"

function AboutItem({icon, title, text}) {
  return (
    <li className="about-item">
        <Icon src={icon} className="about-icon"/>

        <div className="ai-right">
            <Midh3 color='primary' className='ai-title'>{title}</Midh3>
            <Lightbody className='ai-text'>{text}</Lightbody>
        </div>
    </li>
  )
}

export default AboutItem