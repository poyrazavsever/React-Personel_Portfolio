import React from 'react'
import MainTitle from '../MainTitle'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'
import { ContactFC } from "../MainStyle"

function Contact() {
  return (
    <div id='contact' className='ContactPart'>
      <MainTitle mainl = "Contact" mainr = "Me" mainb = "Do you want to tell me something?" /> 

      <ContactFC className="contactBottom">

            <ContactLeft />

            <ContactRight />

      </ContactFC>

    </div>
  )
}

export default Contact