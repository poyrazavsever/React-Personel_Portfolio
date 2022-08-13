import React from 'react'
import MainpageLeft from './MainpageLeft'

import { FlexContainer } from "../MainStyle"
function Mainpage() {
  return (
    <main className='MainPage' id='mainpage'>

      <FlexContainer>

          <MainpageLeft/>

          <img src="Images/Photo.png" alt="MyPhoto" id="MainPhoto" />
      </FlexContainer>
      
    </main>
  )
}

export default Mainpage