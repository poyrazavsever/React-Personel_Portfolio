import React from 'react'
import { Icon } from "./MainStyle"
import { Lightbody } from "./Headings"

function SocialMedia() {
  return (

    <>
    
    <ul className="social-media">

        <li>
            <Icon src="Svg/Main-logo-sm-2.svg" />
        </li>
        
        <li className="social-item">
            <a href="https://www.instagram.com/p.avsever/" target="_blank">
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