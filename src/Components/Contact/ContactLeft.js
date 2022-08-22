import React from 'react'
import LeftItem from './LeftItem'
import Discord from '../Discord'


function ContactLeft() {
  return (
    <div className = "contactLeft">
      <Discord />

      <LeftItem link="#" icon="İcon-Set/telegram.svg" title="Telegram" text= "@Pavsever" />

      <LeftItem link="#" icon="İcon-Set/envelope.svg" title="E-Mail" text= "poyrazavsever@gmail.com" />
    </div>
  )
}

export default ContactLeft