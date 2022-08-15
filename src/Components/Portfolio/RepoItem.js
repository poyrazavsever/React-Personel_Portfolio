import React from 'react'
import { Lightbody } from "../Headings"

function RepoItem({name, link, date}) {
  return (

    <div className="repo-item">

        <a href={link} target="_blank" className='ri-top'>
            <Lightbody className='repo-name'>{name}</Lightbody>
        </a>

        <div className="ri-bottom">
          <Lightbody className='repo-date'>{date}</Lightbody>
        </div>

    </div>
  )
}

export default RepoItem