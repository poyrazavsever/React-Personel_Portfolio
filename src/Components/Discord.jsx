import React, { useState, useEffect} from 'react'
import { GoPrimitiveDot } from "react-icons/go"
import axios from 'axios'

const reduce = {
  "dnd"     : "#ED4245",
  "idle"    : "#FEE75C",
  "online"  : "#57F287",
  "offline" : "#747f8d"
}

export default function Discord() {
  const [discord, setDiscord] = useState(null)

  useEffect(() => {
    const getDiscord =  () => {
      axios.get("https://api.lanyard.rest/v1/users/918866785787330590").then(({data}) => setDiscord(data.data))
      setInterval(() => axios.get("https://api.lanyard.rest/v1/users/918866785787330590").then(({data}) => setDiscord(data.data)), 30000)
    }

    !discord && getDiscord()
      
  }, [discord])

  var vscActivity = discord && discord.activities.filter(activity => activity.name === "Visual Studio Code")[0];
  return (
      !discord ? "":
      <div className='dc-account' >
          <div className='dc-top-part' style={{borderColor: reduce[discord.discord_status]}} >
            <img src={`https://cdn.discordapp.com/avatars/${discord.discord_user.id}/${discord.discord_user.avatar}`} className="dc-img" style={{width:"60px"}} alt="" />
            <div>
              <span className='dc-name'>{discord.discord_user.username}#{discord.discord_user.discriminator}</span>
            </div>  
            <span><GoPrimitiveDot style={{color: reduce[discord.discord_status]}}  className='dc-id-part'/></span>
          </div>
          {
            vscActivity && 
            <div>

              <div className='dc-vscode'  style={{borderColor: reduce[discord.discord_status]}}>

                <img src={`https://cdn.discordapp.com/app-assets/${vscActivity.application_id}/${vscActivity.assets.large_image}.png`} alt="dc-detail-img" className='dc-detail-img'/>
                <div className='dc-activity'>
                    <span className='activityDetail'>{vscActivity.details}</span>
                    <span className='activityState'>{vscActivity.state}</span>
                </div>

              </div>
              
            </div>
          }
        </div>
  )
}
