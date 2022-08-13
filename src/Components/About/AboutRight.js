import React from 'react'
import { Icon } from "../MainStyle"

function AboutRight() {
  return (
    <section className="About-Left">
        
        <ul className="about-list">

            <li className="about-item">
                <Icon src="İcon-Set/comment-question.svg" />
            </li>

            <li className="about-item">
                <Icon src="İcon-Set/comment-code.svg" />
            </li>

            <li className="about-item">
                <Icon src="İcon-Set/target.svg" />
            </li>

        </ul>

    </section>
  )
}

export default AboutRight