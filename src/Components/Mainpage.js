import React from 'react'
import MainpageLeft from './MainpageLeft'

function Mainpage() {
  return (
    <main className='MainPage' id='mainpage'>
        <MainpageLeft/>

        <img src="Images/Photo.png" alt="MyPhoto" id="MainPhoto" />
    </main>
  )
}

export default Mainpage