import React from 'react'
import { Lighth5, Lightbody } from "../Headings"

function RepoItem({name, link, desc}) {
  return (

    <div className="repo-item">

        <a href={link} target="_blank" className='ri-top'>
            <Lighth5 className='repo-name'>{name}</Lighth5>
        </a>

        <div className="ri-hover">
          <Lightbody className='repo-desc'>{desc}</Lightbody>
        </div>

    </div>
  )
}

export default RepoItem