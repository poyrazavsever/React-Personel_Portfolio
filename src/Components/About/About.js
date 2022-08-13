import React from 'react'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'
import { FlexContainer } from '../MainStyle'
import MainTitle from "../MainTitle"

function About() {
  return (
    <section className="AboutPage" id='about'>
        
        <MainTitle mainl = "About" mainr = "Me" mainb = "My Introduction"> </MainTitle> 

        <FlexContainer>

          <AboutLeft />

          <AboutRight />

        </FlexContainer>
        

        <br /><br /><br /><br /><br /><br /><br /><br />

    </section>
  )
}

export default About