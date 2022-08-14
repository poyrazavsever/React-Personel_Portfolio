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
            repos.map((repo, index) =><RepoItem name={repo.name} link={repo.clone_url} desc={repo.description || "Review"} key={index}/>)
        }

        {/* created_at: "2022-05-29T09:18:01Z" 
            description*/
        }

        
      </div>
    )
}

export default Repos