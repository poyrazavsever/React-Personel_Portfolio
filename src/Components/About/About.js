import React from 'react'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'
import { FlexContainer } from '../MainStyle'

function About() {
  return (
    <section className="AboutPage" id='about'>
        <FlexContainer>

          <AboutLeft />

          <AboutRight />

        </FlexContainer>
        

    </section>
  )
}

export default About