import React from 'react'
import Repos from './Repos'
import MainTitle from "../MainTitle"
import { FlexContainer } from "../MainStyle"

function Portfolio() {
    return (

        <div className='PortfolioPage' id='portfolio'>
            <MainTitle mainl = "My" mainr = "Portfolio" mainb = "Projects I Developed" /> 
        
            <FlexContainer>

                <Repos />


                <img src="Images/Portfolio-Image.png" alt="Portfolio Image" className='port-img'/>
                        
            </FlexContainer>
        </div>


  )
}

export default Portfolio