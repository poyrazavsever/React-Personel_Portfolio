import React from 'react'
import Repos from './Repos'
import MainTitle from "../MainTitle"

function Portfolio() {
    return (
        <div className='PortfolioPage' id='portfolio'>
            <MainTitle mainl = "My" mainr = "Portfolio" mainb = "Projects I Developed" /> 
        
            {/* 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 */}

            <Repos />
                
        </div>
  )
}

export default Portfolio