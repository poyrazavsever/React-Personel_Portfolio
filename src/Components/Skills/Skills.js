/* eslint-disable no-unused-expressions */

import React, { useState } from 'react'
import MainTitle from "../MainTitle"
import SkillItem from "./SkillItem"
import { FlexContainer, Icon } from "../MainStyle"

function Skills() {

  const [types, setType] = useState("frontend")
  const data = [
    {
      name:"Html 5",
      link:"Languages/html.png",
      type:"frontend"
    },

    {
      name:"Css 3",
      link:"Languages/css.png",
      type:"frontend"
    },

    {
      name:"Javascript",
      link:"Languages/javascript.png",
      type:"frontend"
    },

    {
      name:"Bootstrap",
      link:"Languages/bootstrap.png",
      type:"frontend"
    },

    {
      name:"Tailwind",
      link:"Languages/tailwind.png",
      type:"frontend"
    },

    {
      name:"React",
      link:"Languages/react.png",
      type:"frontend"
    },

    {
      name:"Flask",
      link:"Languages/flask.png",
      type:"backend"
    },

    {
      name:"Node.js",
      link:"Languages/nodejs.png",
      type:"backend"
    },

    {
      name:"Photoshop",
      link:"Languages/photoshop.png",
      type:"designer"
    },

    {
      name:"Figma",
      link:"Languages/figma.png",
      type:"designer"
    },
  ]


    const filtData = data.filter(dataFilter);

    function dataFilter(e) {
      return e.type == types;
    }

    let map_data = filtData.map((e, index) =>{
      return <SkillItem name={e.name} language = {e.link} key={index} />
    })

    const frontend = () => {
      setType("frontend")
    }

    const backend = () => {
      setType("backend")
    }

    const designer = () => {
      setType("designer")
    }
 
  return (
    <div id='skills' className='SkillsPart'>

        
        <MainTitle mainl = "My" mainr = "Skills" mainb = "I use these technologies." /> 

        <FlexContainer content ="around" className='Skill-Items'>

          
          <div className="skillChangeBtn">

            <button onClick={frontend}>
              <div className="scb-text">
                <Icon src="İcon-Set/frontend.svg" alt='Skill Icon' className='scbl-icon' />
                Frontend
              </div>

              <Icon src="İcon-Set/arrow-right.svg" alt='Skill Icon'/>            

            </button> 

            <button onClick={backend}>
              <div className="scb-text">
                <Icon src="İcon-Set/backend.svg" alt='Skill Icon' className='scbl-icon' />
                Backend
              </div>

              <Icon src="İcon-Set/arrow-right.svg" alt='Skill Icon'/>       
            </button> 

            <button onClick={designer}>
              <div className="scb-text">
                
                <Icon src="İcon-Set/web-design.svg" alt='Skill Icon' className='scbl-icon' />
                UI/ UX Designer

              </div>

              <Icon src="İcon-Set/arrow-right.svg" alt='Skill Icon'/>       
            </button> 

          </div>
          
          <div className="skillGroup"> 
            { map_data}
          </div>
          
        </FlexContainer>
    
    </div>
  )
}

export default Skills