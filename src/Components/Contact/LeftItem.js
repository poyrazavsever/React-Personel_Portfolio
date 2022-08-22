import React from 'react'
import { ContactIcon } from "../MainStyle"
import { Lightbody } from "../Headings"
function LeftItem({icon, title, text, link} ) {
  return (


    <a href={link} className="left-item">
    
      <div className="li-icon">
          <ContactIcon src={icon} alt="Contact Icon"/>
          <Lightbody className='li-title'>{title}</Lightbody>
      </div>

      <div className="li-text">
          <Lightbody>{text}</Lightbody>
      </div>
    
    </a>


  )
}

export default LeftItem