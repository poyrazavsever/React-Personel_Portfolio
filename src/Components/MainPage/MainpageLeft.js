import React from 'react'
import { Lighth1, Lighth5, Lightbody, SpanPurple } from "../Headings"

import { BtnIcon, Icon } from "../MainStyle"

import { Btn } from "../Buttons"

function MainpageLeft() {
  return (
    <div className="left-part"  id="MainPageLeft" >
            
        <div className="text-part">

            <Lighth1 style = {{margin:32}}>Hi, I'm <SpanPurple>Poyraz Avsever</SpanPurple></Lighth1>

            <Lighth5 style = {{margin:32}}>Jr. Fullstack Developer & Designer</Lighth5>
            
            <Lightbody style = {{margin:32}}>I am interested in software. So far, I have developed myself in various technologies. On this site, I will share with you the technologies I have learned and the projects I have developed.</Lightbody>

            <Btn theme="primary">
              Contact
              <BtnIcon src="İcon-Set/interface.svg" alt="btn-contact-ico" />
            </Btn>
        </div>

    </div>
  )
}

export default MainpageLeft