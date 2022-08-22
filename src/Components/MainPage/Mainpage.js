import React from 'react'
import MainpageLeft from './MainpageLeft'

import { FlexContainer } from "../MainStyle"
function Mainpage() {
  return (


      <main className='MainPage' id='mainpage'>

        <FlexContainer className='mp-text'>

            <MainpageLeft/>

            <img src="Images/Photo.png" alt="MyPhoto" id="MainPhoto" />
              
        </FlexContainer>

        <div className="mp-bg"></div>

      </main>

  )
}

export default Mainpage