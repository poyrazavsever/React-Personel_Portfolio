import React from 'react'
import { Lighth5 } from "../Headings"

function RepoItem({name, link, date}) {
  return (

    <div className="repo-item">

        <a href={link} target="_blank" className='ri-top' rel='noreferrer'>
            <Lighth5 className='repo-name'>{name}</Lighth5>
        </a>

        <div className="ri-bottom">
          <Lighth5 className='repo-date'>{date}</Lighth5>
        </div>

    </div>
  )
}

export default RepoItem