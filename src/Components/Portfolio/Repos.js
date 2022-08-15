import { useEffect, useState } from 'react'
import RepoItem from './RepoItem';

function Repos() {
    const [repos, setRepo] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("https://api.github.com/users/poyrazavsever/repos")
            const jsonParsedData = await data.json()
            // console.log(jsonParsedData)
            setRepo(jsonParsedData)


        }

        fetchData()
    })


    return (
      <div className='My-Repos'>
        {
          !repos ?
            <h1>Loading...</h1>
            :
            repos.map((repo, index) =><RepoItem name={repo.name} link={repo.clone_url} date={repo.created_at.split("-")[0]} key={index}/>)
        }

        
      </div>
    )
}

export default Repos