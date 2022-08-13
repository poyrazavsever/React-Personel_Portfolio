import React from 'react'
import AboutItem from './AboutItem'
import { Icon } from "../MainStyle"

function AboutRight() {
  return (
    <section className="About-Left">
        
        <ul className="about-list">

            <AboutItem icon="İcon-Set/comment-question.svg" title="Who am I?" text="
            I'm Poyraz Avsever. I am 16 years old. I am studying at a science high school. My hobbies are mainly about computers. Apart from that, I like playing computer games, football and listening to music."/>

            <AboutItem icon="İcon-Set/comment-code.svg"
            title="Who am I?" text="
            I'm Poyraz Avsever. I am 16 years old. I am studying at a science high school. My hobbies are mainly about computers. Apart from that, I like playing computer games, football and listening to music."/>

            <AboutItem icon="İcon-Set/target.svg"
            title="Who am I?" text="
            I'm Poyraz Avsever. I am 16 years old. I am studying at a science high school. My hobbies are mainly about computers. Apart from that, I like playing computer games, football and listening to music."/>

        </ul>

    </section>
  )
}

export default AboutRight