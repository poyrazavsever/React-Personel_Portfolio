import React from 'react'
import AboutItem from './AboutItem'
import { Icon } from "../MainStyle"

function AboutRight() {
  return (
    <section className="About-Right">
        
        <ul className="about-list">

            <AboutItem icon="İcon-Set/comment-question.svg" title="Who am I?" text="
            I'm Poyraz Avsever. I am 16 years old. I am studying at a science high school. My hobbies are mainly about computers. Apart from that, I like playing computer games, football and listening to music."/>

            <AboutItem icon="İcon-Set/comment-code.svg"
            title="Why Software and Design?" text="
            When choosing my dream job, I looked at whether I liked it or not, rather than the money I would earn. Because I will do that job all my life, and I am aware that if I do it without love, I will get bored and tired after a while. Even though I started software as a hobby, I realized that I really enjoyed doing this job. In short, I can write code and deal with the computer all my life without getting bored."/>

            <AboutItem icon="İcon-Set/target.svg"
            title="What's My Purpose?
            " text="
            My primary goal for now is to get into university. I want computer engineering as a department. I want to improve myself as much as possible about software and master certain areas. I hope I will get better places in my future life, realize my dreams and have a good job. "/>

        </ul>

    </section>
  )
}

export default AboutRight