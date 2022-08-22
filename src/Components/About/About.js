import React from 'react'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'
import { FlexContainer } from '../MainStyle'
import MainTitle from "../MainTitle"

function About() {
  return (
    <section className="AboutPage" id='about'>

      <div className="reveal" >
        <MainTitle mainl = "About" mainr = "Me" mainb = "My Introduction"> </MainTitle> 

        <FlexContainer className='flexcontainer'>

          <AboutLeft />

          <AboutRight />

        </FlexContainer>
      </div>

    </section>
  )
}

export default About