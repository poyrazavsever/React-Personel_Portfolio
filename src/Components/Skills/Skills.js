import React from 'react'
import MainTitle from "../MainTitle"
import SkillItem from "./SkillItem"
import { GridContainer } from "../MainStyle"

function Skills() {
  return (
    <div id='skills' className='SkillsPart'>

        
        <MainTitle mainl = "My" mainr = "Skills" mainb = "I use these technologies." /> 

        <GridContainer className='Skill-Items'>
            
            <SkillItem language="İcon-Set/html5.svg" name="HTML 5"/>

            <SkillItem language="İcon-Set/css3.svg" name="CSS 3"/>

            <SkillItem language ="İcon-Set/javascript.svg" name = "Javascript"/>

            <SkillItem language ="İcon-Set/bootstrap.svg" name = "Bootstrap"/>

            <SkillItem language ="İcon-Set/sass.svg" name = "Scss"/>

            
            <SkillItem language ="İcon-Set/react.svg" name = "React"/>

        </GridContainer>
    
    </div>
  )
}

export default Skills