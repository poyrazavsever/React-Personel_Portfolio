import React from 'react'
import { Icon } from "./MainStyle"
import { Lightbody } from "./Headings"

function SocialMedia() {
  return (

    <>
    
    <ul className="social-media">
        
        <li className="social-item">
            <a href="#">
                <Icon src="İcon-Set/instagram.svg" />
            </a>
        </li>

        <li className="social-item">
            <a href="#">
                <Icon src="İcon-Set/twitter.svg" />
            </a>
        </li>

        <li className="social-item">
            <a href="#">
                <Icon src="İcon-Set/youtube.svg" />
            </a>
        </li>

        <li className="social-item">
            <a href="#">
                <Icon src="İcon-Set/github.svg" />
            </a>
        </li>

    </ul>

    </>

  )
}

export default SocialMedia